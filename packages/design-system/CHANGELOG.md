# Changelog

All notable changes to `@farnazshahriari/design-system`.

This project follows [semantic versioning](https://semver.org), with one
adjustment that matters for a design system: **a breaking change here is
usually visual, not structural.** A tuned token compiles fine everywhere
and still moves type, colour or spacing on every site that installs it. So
the rule is what a change does to a page, not to a signature:

| | |
| --- | --- |
| **patch** | Nothing looks different — a bug fix, a docs change, a type correction |
| **minor** | Something new, or a value tuned within its intent. Existing pages still read correctly |
| **major** | An existing page would look wrong, or need editing to look right |

Each entry says what will look different, because that is what a consumer
is deciding about when they read it.

## [3.0.0] — 2026-10-29

**Major, and every page changes colour.** The system now carries a specific
brand — "Calm. Bold." — rather than a neutral clay-inspired palette. Nothing
needs editing to keep compiling except one removed section theme, but no
page looks the same.

### Paper and black

The palette is four values: Paper `#f5f4f0`, Black `#0d0d0d`, Line grey
`#bdbab2`, and Point `#7a8574`. The budget is 80% paper, 20% black, and
colour capped at roughly 2% of a view.

| Token | Was | Now |
| --- | --- | --- |
| `--background` | `#ffffff` | `#f5f4f0` |
| `--foreground` | `#06070a` | `#0d0d0d` |
| `--primary` | `#171921` | `#0d0d0d` |
| `--muted` | `#f3f4f6` | `#ebe9e3` |
| `--muted-foreground` | `#666c7a` | `#5a5852` |
| `--border` | `#e6e8eb` | `#bdbab2` |
| `--input` | `#8b94a2` | `#85827b` |

**`--accent` is no longer a brand colour, and never really was one.** 37 of
its 39 uses in this library are `focus:`, `hover:` and `data-[state=open]:`
backgrounds on menu items, options and toggles — it is the interaction
surface, inherited from shadcn along with its misleading name. Setting it to
a saturated blue meant every dropdown hover was a block of saturated blue.
It is now a step down the paper ramp (`#e4e1d9`), which is what a hover
state should be.

**`--point` is new**, and is the brand's only actual colour. It marks where
you are and does nothing else. It is deliberately not wired into any section
theme, and at 3.51:1 on paper it sits below the 4.5:1 text requires — that
is the brand's "never coloured text for important information" as a number.

### `theme="accent"` is removed — BREAKING

A full-bleed band of `--accent` made sense when `--accent` was a brand
colour. This brand has one bold ground and it is black: a band of the green
would be ~100% of a view against a ~2% budget.

```diff
- <Section theme="accent">
+ <Section theme="dark">
```

It is a TypeScript error rather than a silent colour change, so the compiler
will find every one for you.

### Four type roles

Statements shout, headings do not. The gap between them *is* the hierarchy.

| Token | Role | Was | Now |
| --- | --- | --- | --- |
| `text-display` | Statement | 40→110px, 700 | 56→96px, **800** |
| `text-h1` | Statement | 40→92px, 700 | 48→72px, **800** |
| `text-h2` | Heading | 30→62px | **24→32px** |
| `text-h3` | Heading | 20→36px | **20→26px** |
| `text-h4` | Heading | 20→30px | **20→22px** |
| `text-lead` | Body | 18→34px, 500 | 20→26px, **400** |
| `text-body` | Body | *did not exist* | **17→18px at 1.6** |
| `text-meta` | Label | 13→17px fluid | **13px fixed, +10% tracking** |

Headings shrink a lot. v2.0.0 grew them on the reading that bigger was
under-set; this brand says the opposite — one statement per view carries the
page, and everything under it stays quiet.

**`text-body` is new, and `<body>` now sets its metrics globally.** This
system previously had no body token at all: ordinary copy sat on Tailwind's
`text-sm`/`text-base`, 14/16px at 1.43/1.5, below the brand's 17px floor.
Paragraphs that do not opt into anything are now correct by default.

**`text-label` is new**, and is a `@utility` rather than a font-size token.
A Tailwind type token carries size, line-height, tracking and weight — but
not `text-transform` — so `text-meta` alone always lost the brand's
uppercasing and every call site had to remember it. Both read the same
`--label-*` custom properties, so they cannot drift.

### One curve

`easeOutExpo` and `easeOut` both resolve to `cubic-bezier(.22, 1, .36, 1)`
now; the brand specifies a single easing. They remain separate exports
because what differs between them is duration, not shape. Tailwind's
`--ease-out` is overridden to the same curve, so a CSS transition and a
Motion animation move identically without either knowing about the other.

UI durations moved up into the brand's 500–800ms range: `quick` 0.35 → 0.5,
`short` 0.5 → 0.65. Reveal durations did not move; they were already long.

### `cn()` was deleting every type-role utility

`tailwind-merge` does not know this system's type roles. It saw `text-h2`,
failed to match a known font size, and filed it under *text colour* — so any
colour utility later in the same call deleted it:

```js
cn("text-h2", "text-muted-foreground")  // -> "text-muted-foreground"
```

Silently, in every component, since they all pipe `className` through `cn()`.
The heading just rendered at the inherited size, which reads as a design
mistake rather than a bug. `cn()` now registers the roles with
`extendTailwindMerge`, so a type role and a colour coexist and two type roles
collapse to the last one. **Add any new type role to that list**, or it will
be eaten the same way.

This also means `className="text-label"` on a `Label` now wins over the
component's base `text-sm`, where before the cascade silently kept `text-sm`.

### Raw colour utilities are gone

The "no component contains a raw colour" rule had only ever been checked by
grepping for hex. Tailwind palette utilities bypass tokens just as
effectively, and six were in the library: `text-white` on the destructive
Button and Badge, `bg-black/50` on the Dialog, AlertDialog and Sheet
overlays, and `bg-white` on the Slider thumb — which did not invert on a dark
section.

All tokenised. The overlays needed a **new `--overlay` token** rather than an
existing one: a scrim has to stay dark in both themes, and `--foreground` is
paper in the dark one, so deriving from it would have lit the page up instead
of dimming it.

### `Divider` still offered the removed accent theme

`dividerVariants` kept an `accent` entry after `[data-section="accent"]` was
deleted — a dead variant that silently fell back to `inherit`. The compiler
caught `Section` because that is where the type error surfaced; `Divider`
has its own `cva` and was missed. Removed.

### Also

- `--destructive` is deep and desaturated (`#8f2e20`) so an error reads as
  functional rather than as a brand colour. The dark value is lifted to
  `#d05a44`, because it has to carry black text at AA rather than merely be
  visible.
- `check:contrast` now parses the section themes out of `theme.css` instead
  of restating their values, which it could previously disagree with. It
  also checks input boundaries and point markers inside every section.
- Verified: all pairs meet WCAG AA in both page themes and all three
  section themes.

## [2.1.0] — 2026-09-21

Icons were the one thing 2.0.0's larger type left behind. Nothing breaks;
every icon in the system gets heavier, and the accordion's chevron grows.

### Icons have a stroke token

New `--stroke-icon`, default `2.25`, applied in the base layer to
`svg.lucide`. Lucide draws at stroke-width 2 in a 24px box, which is a
hairline once an icon renders at 16px beside a 92px heading — and nothing in
the system set the stroke at all, so every icon inherited that default.

It is a CSS rule rather than a prop on 22 components because CSS beats an
SVG presentation attribute, so one declaration reaches every icon including
ones a consumer renders themselves. Change the token to restyle all of them.

### The accordion chevron is larger

`size-4` → `size-5`, and it no longer forces `text-muted-foreground`, so it
takes the trigger's own colour. A 16px hairline in a lighter grey read as an
afterthought next to a row title, which is the whole affordance for "this
opens".

Marked `modified` in the showcase with the reason, per the repo's own rule
about not leaving a changed component looking stock.

## [2.0.0] — 2026-09-21

**Major, and it will look it.** Every page built on this system changes
typeface and grows its headings. Nothing needs editing to keep working, but
nothing looks the same either, which is exactly what major means here.

### The typeface is Inter

`--font-sans` now reads `--font-inter` rather than `--font-geist-sans`.

**Consumers must load Inter and expose it as `--font-inter`**, usually via
`next/font`:

```tsx
import { Inter } from "next/font/google"
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
```

A consumer that does not now falls back to `ui-sans-serif, system-ui`
rather than to nothing — the old value had no fallback at all, so a missing
font variable silently resolved to the browser default serif.

Geist was a deliberately neutral grotesque. Inter is drawn for screen text
and holds the tight negative tracking this system leans on at display
sizes, which Geist flattened.

### Headings are much larger

The scale was a conservative reading of the source material. Ceilings now
sit roughly midway between where they were and what
`reference/clay-spec.md` records, and the two smallest steps became fluid
rather than fixed.

| Token | Was | Now | Source spec |
| --- | --- | --- | --- |
| `text-display` | 40 → 90px | 40 → **110px** | — |
| `text-h1` | 40 → 64px | 40 → **92px** | 40 → 122px |
| `text-h2` | 30 → 52px | 30 → **62px** | 30 → 72px |
| `text-h3` | 20 → 32px | 20 → **36px** | 20 → 40px |
| `text-h4` | 18 → 24px | 20 → **30px** | 22 → 36px |
| `text-lead` | 18 → 28px | 18 → **34px** | 18 → 40px |
| `text-meta` | 13px fixed | 13 → **17px** | 14 → 22px |

Mobile sizes are unchanged except `text-h4` (18 → 20px), so a phone layout
moves very little; the growth is all at desktop widths, where the old
ceilings were leaving the page looking under-set.

Line-heights tighten where the size grew enough to need it — `text-h1`
1.1 → 1.05, `text-h2` 1.15 → 1.1, `text-h4` 1.3 → 1.25. Letter-spacing is
unchanged; it was already correct.

Ordinary copy still sits on Tailwind's `text-sm` / `text-base` and did not
move. The source spec scales body text too (16 → 36px); that is a larger
decision about what a paragraph is, and is deliberately left alone here.

## [1.0.0] — 2026-09-11

First published release.

### The theme

- Colour tokens for light and dark, built as foreground/background pairs
  so contrast survives a theme change
- **Four section themes** (`light`, `muted`, `dark`, `accent`) as data
  attributes that re-declare the colour tokens for a subtree. A button,
  caption or border inside a dark or accent band inverts on its own — no
  component takes an `onDark` prop
- Near-zero radius by default, with `--radius-pill` (999px) as the one
  exception for a primary action
- A fluid type scale (`text-display`, `text-h1`–`h4`, `text-lead`,
  `text-meta`) with line-height, letter-spacing and weight paired to each
  size, so they travel together
- Accent `#33658a`. Every meaningful pair verified against WCAG AA in both
  page themes and all four section themes

### Components

- **52 components** based on shadcn/ui, restyled purely through tokens.
  Every `shadow-*` stripped — overlays separate themselves with a border
  and an opaque surface instead
- `link-underline`, the one primitive with no upstream equivalent
- Layout primitives: `Container`, `Section`, `Divider`, `Grid` (12 columns,
  16px gutter)
- `ProjectGrid` / `ProjectCard` for work listings

### Motion

- `Reveal` and `RevealGroup` with three recipes and only three: fade, rise,
  rise-fade. In rise-fade the position settles slower than the fade, so an
  element arrives before it stops moving
- The **shared-element title morph**: a project title and the same title on
  its case-study page share a `<ViewTransition name>`, so the word travels
  and scales between routes instead of one fading out while another fades in
- `prefers-reduced-motion` handled once, globally, by `MotionProvider`.
  Transforms are dropped and opacity kept; no primitive checks the query

### Conventions

- Four guardrail skills ship in `skills/`. Copy them into a project's
  `.claude/skills/` and Claude Code holds that project to the same rules

### Notes for this release

- Ships TypeScript source rather than a build, so consumers add
  `transpilePackages`. Two lines are load-bearing and easy to miss — that
  one, and the `@source` line in your CSS, without which Tailwind never
  scans `node_modules` and the components arrive unstyled. Both are in the
  README
- Installing requires a token with `read:packages`. GitHub Packages
  authenticates every npm read, so this is not a consequence of the
  repository being private

[1.0.0]: https://github.com/FarnazShahriari/design-system/releases/tag/v1.0.0
