---
name: design-tokens
description: How colour, radius, spacing and type work in this design system, and how to change them safely. Use this whenever you are about to write a colour, a font-size, a border-radius or a spacing value anywhere in this repo — including when the request sounds like ordinary styling ("make this heading bigger", "the caption looks too light", "use a darker blue here", "rebrand this"). Also use it before editing packages/design-system/theme.css for any reason.
---

# Design tokens

**The invariant this protects: no component contains a raw colour, radius or
font-size. Every one of those values lives in `packages/design-system/theme.css`, and
components only ever reference the token name.**

That is the whole reason the system can be restyled in one place. The moment
a `#33658a` appears in a component, changing the accent stops working and
nobody finds out until the next rebrand.

## Where things live

Everything is in `packages/design-system/theme.css`, in four blocks:

| Block | What it holds |
| --- | --- |
| `@theme inline` | The mapping that generates Tailwind utilities, plus the `--text-*` scale |
| `:root` | Light theme values — the only place a colour is a literal |
| `.dark` | Dark theme values, same token names |
| `[data-section="…"]` | Per-section overrides for light / muted / dark / accent bands |

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

`--accent` is the one token meant to change per project. Everything else is
the shared neutral base, and changing it is a decision about the system
rather than about a project.

## Things that will surprise you

- **`--ring` is deliberately not derived from `--accent`.** A focus ring
  built from the accent silently drops below its required 3:1 the moment
  someone picks a pale accent. Keeping it neutral makes focus survive any
  accent swap. Don't "improve" this.
- **`--border` and `--input` are different on purpose.** A control's
  boundary is what identifies it, so it needs 3:1; decorative dividers do
  not, so `--border` stays quiet. They used to be the same value and that
  was an accessibility bug.
- **Dark-mode accent is lighter than light-mode accent.** A mid-luminance
  band leaves almost no headroom to mute a caption against, which is why
  `#33658a` becomes `#6aa0c8` in the dark. If you change one, check the
  other.

## Type and spacing

The type scale is `text-display` / `text-h1` … `text-h4` / `text-lead` /
`text-meta`. Each carries its own line-height, tracking and weight, so
`text-h1` is the whole declaration — don't add `leading-*` or `tracking-*`
next to it. Ordinary copy stays on Tailwind's `text-sm` / `text-base`.

**One trap.** A few vendored components hard-set their own line-height —
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
