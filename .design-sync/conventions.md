# Building with this design system

"Calm. Bold." — 80% calm paper, 20% bold black, colour capped at about 2% of
any view. The constraints below are the design; following them is what makes
output look like this system rather than near it.

## Wrap the app, or nothing is styled

Three providers, outermost first. Without `ThemeProvider` the light/dark
tokens are never set and components render on whatever ground the host
supplies; without `TooltipProvider` any `Tooltip` throws at mount.

```tsx
import { ThemeProvider, MotionProvider, TooltipProvider } from "@farnazshahriari/design-system"

<ThemeProvider attribute="class" defaultTheme="light">
  <MotionProvider>
    <TooltipProvider>{children}</TooltipProvider>
  </MotionProvider>
</ThemeProvider>
```

`MotionProvider` handles `prefers-reduced-motion` once, globally. No
component checks it, and none should.

## The styling idiom: Tailwind utilities, token names only

Style with Tailwind utilities, but **only ones that name a token**. Never
write a hex value, and never reach for Tailwind's own palette (`bg-white`,
`text-black`, `bg-slate-200`) — those bypass the theme and will not invert.

| Role | Use |
| --- | --- |
| Grounds | `bg-background`, `bg-muted`, `bg-card`, `bg-secondary` |
| Text | `text-foreground`, `text-muted-foreground`, `text-primary-foreground` |
| Lines | `border-border` (decorative rules, card edges) |
| Solid blocks | `bg-primary` with `text-primary-foreground` |
| Interaction | `bg-accent` — the hover/focus surface, **not** a brand colour |
| The one colour | `bg-point` — a marker only, ~2% of a view, never text |
| Errors | `text-destructive` |

Colour tokens come in pairs. Using a pair is what keeps contrast true when
the theme changes; a foreground borrowed from another pair is how this
system breaks.

## Type: four roles, and the token is the whole declaration

| Role | Classes |
| --- | --- |
| Statement | `text-display`, `text-h1` — ExtraBold, 48–96px, **one per view** |
| Heading | `text-h2`, `text-h3`, `text-h4` — Bold, 20–32px |
| Body | `text-lead`, `text-body` — Regular, 17–18px at 1.6 |
| Label | `text-label` (uppercase, +10% tracking), `text-meta` (same metrics, no uppercasing) |

Each carries its own size, line-height, tracking and weight. **Never add
`leading-*` or `tracking-*` beside one** — you will override exactly the
thing that makes it correct. Body copy is `text-body`, not `text-sm` or
`text-base`; `<body>` already sets those metrics, so plain paragraphs are
right by default.

Statements shout and headings do not. The gap between 72px and 32px *is*
the hierarchy — do not close it.

## Layout: a page is a stack of Sections

`Section` owns the ground it sits on and its vertical rhythm; `Container`
is the only thing that sets horizontal insets.

```tsx
import { Button, Container, Section } from "@farnazshahriari/design-system"

<Section theme="dark" rhythm="lg">
  <Container>
    <h2 className="text-h2 max-w-[22ch]">
      Six hundred screens became eleven, and the support queue halved.
    </h2>
    <Button>This inverts on its own</Button>
  </Container>
</Section>
```

`theme` is `light | muted | dark | inherit`. It re-declares the colour
tokens for the whole subtree, so a button, caption or border inside a dark
band inverts by itself. **No component takes an `onDark` prop, and none
should.**

There is exactly one bold ground — `dark` — and a page gets one black block,
for the statement that matters. There is no accent band; a `theme="accent"`
existed before 3.0.0 and was removed.

One trap: `bg-background` is invisible inside a themed Section, because the
section re-declares `--background` to its own ground. Use `bg-muted` on a
light section, or `bg-card` on a muted one.

## Shape and depth

Square by default (`--radius` is ~2px). `rounded-pill` is the single
exception, reserved for one primary action per page. **There are no shadows
anywhere** — a raised surface separates itself with a border and an opaque
ground, and a colour block needs neither.

## Where the truth is

- `_ds/<folder>/styles.css` and the files it imports — the real tokens and
  every compiled utility. Read it before inventing a class name.
- `components/<group>/<Name>/<Name>.d.ts` — the prop contract.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage.
- `guidelines/` — the four guardrail documents this system is held to.
