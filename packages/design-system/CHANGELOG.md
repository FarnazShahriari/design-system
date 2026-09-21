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
