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
