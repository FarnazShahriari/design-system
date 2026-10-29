---
name: design-tokens
description: How colour, radius, spacing and type work in this design system, and how to change them safely. Use this whenever you are about to write a colour, a font-size, a border-radius or a spacing value anywhere in this repo — including when the request sounds like ordinary styling ("make this heading bigger", "the caption looks too light", "use a darker blue here", "rebrand this"). Also use it before editing packages/design-system/theme.css for any reason.
---

# Design tokens

**The invariant this protects: no component contains a raw colour, radius or
font-size. Every one of those values lives in `packages/design-system/theme.css`, and
components only ever reference the token name.**

That is the whole reason the system can be restyled in one place. The moment
a `#0d0d0d` appears in a component, rebranding stops working and nobody
finds out until the next time the palette moves.

## Where things live

Everything is in `packages/design-system/theme.css`, in four blocks:

| Block | What it holds |
| --- | --- |
| `@theme inline` | The mapping that generates Tailwind utilities, plus the `--text-*` scale |
| `:root` | Light theme values — the only place a colour is a literal |
| `.dark` | Dark theme values, same token names |
| `[data-section="…"]` | Per-section overrides for the light / muted / dark bands |

## Using a token

Reach for the Tailwind utility, which is generated from the token:
`bg-background`, `text-muted-foreground`, `border-border`, `bg-accent`,
`rounded-md`, `rounded-pill`, `text-h1`, `text-lead`, `text-meta`.

Colour tokens come in pairs — `bg-primary` with `text-primary-foreground`,
`bg-accent` with `text-accent-foreground`. Using a pair is what guarantees
contrast survives a theme change. A foreground borrowed from a different
pair is the most common way this system breaks.

## Changing a colour

1. Edit the value in `:root`, and its counterpart in `.dark`.
2. If the token also appears in the `[data-section]` blocks, update it there
   too — those are separate declarations, not inherited.
3. Run `npm run check:contrast`. It reads the tokens straight out of
   `globals.css` and checks every meaningful pair against WCAG AA, in both
   page themes and inside the section themes.
4. If it fails, fix the palette rather than lowering the bar. The script
   prints the ratio and what was needed.

There is no "one token to swap per project". This system carries a specific
brand: Paper `#f5f4f0`, Black `#0d0d0d`, Line grey `#bdbab2`, and Point
`#7a8574`. 80% paper, 20% black, colour capped at roughly 2% of a view.
Changing any of them is a decision about the brand, not about a project —
a consuming project that needs to differ redeclares the token in its own
CSS after the theme import.

## Things that will surprise you

- **`--accent` is not a brand accent.** Its name is inherited from shadcn
  and it misleads everyone once. 37 of its 39 uses are `focus:`, `hover:`
  and `data-[state=open]:` backgrounds — it is the *interaction surface*.
  It belongs a step down the paper ramp. Give it a saturated colour and
  every dropdown hover becomes a block of that colour. The brand's actual
  colour is `--point`.
- **`--point` has a budget.** About 2% of a view: the "you are here" dot,
  and nothing else. It is never text — at 3.51:1 on paper it is below the
  4.5:1 text needs, on purpose, which is the brand's "never coloured text
  for important information" expressed as a number.
- **There is no accent section theme.** A page has one bold ground and it
  is `theme="dark"`. `<Section theme="accent">` was removed in 3.0.0 and
  is now a TypeScript error rather than a silent colour change.
- **`--ring` is deliberately not derived from any brand colour.** A focus
  ring built from one silently drops below its required 3:1 when the
  palette moves pale. Keeping it neutral makes focus survive a rebrand.
  Don't "improve" this.
- **`--border` and `--input` are different on purpose.** A control's
  boundary is what identifies it, so it needs 3:1; decorative dividers do
  not, so `--border` stays quiet. They used to be the same value and that
  was an accessibility bug.
- **Line grey cannot be `--input`.** `#bdbab2` is 1.76:1 on paper. That is
  fine for a decorative rule and fails the 3:1 a control's boundary needs,
  which is exactly why the two tokens are separate. `--input` is `#85827b`.
- **Dark-mode destructive is lighter than light-mode destructive.** It has
  to carry black text at AA on a dark ground, not merely be visible, so
  `#8f2e20` becomes `#d05a44`. If you change one, check the other.

## Type and spacing

Four roles, and every token belongs to one:

| Role | Tokens | Spec |
| --- | --- | --- |
| Statement | `text-display`, `text-h1` | ExtraBold 800, 48–96px, max one per view |
| Heading | `text-h2`, `text-h3`, `text-h4` | Bold 700, 20–32px |
| Body | `text-lead`, `text-body` | Regular 400, 17–18px at 1.6 |
| Label | `text-label`, `text-meta` | Medium 500, 13px, +10% tracking, never below 12px |

Each carries its own line-height, tracking and weight, so `text-h1` is the
whole declaration — don't add `leading-*` or `tracking-*` next to it.

**Body copy is `text-body`, not `text-sm` / `text-base`.** Tailwind's
defaults are 14/16px at 1.43/1.5, below the brand's floor. `<body>` sets
`text-body` metrics globally, so plain paragraphs are already right; reach
for the class when an element overrides it.

**Labels use `text-label`, not `text-meta`.** A Tailwind font-size token
carries size, line-height, tracking and weight — but not `text-transform`,
so `text-meta` alone always loses the uppercasing. `text-label` is a
`@utility` that composes the complete label. Use `text-meta` only when you
deliberately want those metrics without the uppercasing.

**The trap that cost the most to find.** `cn()` uses `tailwind-merge`, which
does not know this system's type roles. It sees `text-h2`, fails to match a
known font size, and files it under *text colour* — so a colour utility later
in the same call **deletes it**:

```js
cn("text-h2", "text-muted-foreground")  // -> "text-muted-foreground"
```

Silently: the heading renders at the inherited size and it reads as a design
mistake, not a bug. `src/lib/utils.ts` registers the roles with
`extendTailwindMerge` to stop this. **If you add a type role to `theme.css`,
add it to that list too** — otherwise it will be eaten everywhere, and
nothing will tell you.

**A second trap.** A few vendored components hard-set their own line-height —
`CardTitle` is `leading-none font-semibold`, `DialogTitle` is `text-lg
leading-none font-semibold`. `cn()` merges font-size and line-height as
separate groups, so `<CardTitle className="text-h4">` gives you the h4
*size* with a line-height of 1, silently losing the one that travels with
the token. Put a real heading inside instead:

```tsx
<CardHeader>
  <h3 className="text-h4">Product design</h3>
  <CardDescription>…</CardDescription>
</CardHeader>
```

That also keeps the heading semantics, which a div-based `CardTitle` loses.

Spacing has no override: Tailwind's default scale is used as-is. The
discipline is which steps you reach for — 4, 8, 12, 16, 24, 32, 48, 64, 80,
120px. If a layout seems to need something between two steps, the block
boundary is usually in the wrong place.

## Guardrails

- A hex value, `rgb()` or `oklch()` in a component file is a bug. If the
  colour you want does not exist, add a token rather than inlining it.
- Radius comes from `--radius` (near-square by design) or `rounded-pill`.
  A third radius is a new decision about the system; make it deliberately.
- Never set `font-size` directly. If the size you want is not on the scale,
  either the scale is wrong or the element is the wrong element.
- After any colour change, `npm run check:contrast` before you call it done.
