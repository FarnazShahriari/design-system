# Design System

A simple, ownable design system: 47 [shadcn/ui](https://ui.shadcn.com)
components (Next.js + Tailwind CSS v4 + Radix), retokenized with a
restrained, near-monochrome palette and tight, fluid type scale inspired
by [clay.global](https://clay.global).

Run the dev server and the whole thing is browsable: an interactive
showcase with foundations (colour, type, spacing, shape, motion), a page
per component, and a **token playground** where you can tune the theme
live and copy the CSS back out.

## Why this stack

- **shadcn/ui is not a package.** Component source is copied into
  `src/components/ui/` and you own every line — no black-box dependency,
  no breaking upgrades. Add more components any time with
  `npx shadcn@latest add <name>`, and they'll pick up this theme
  automatically because they're all styled from the same token names.
- **One file controls the whole look.** `src/app/globals.css` defines
  every colour, radius and type-scale value as a named token
  (`--primary`, `--muted-foreground`, `--radius`, `text-h1`, ...).
  Components never hard-code a colour or size — they reference the
  token. Change a value there and it propagates everywhere.
- **The "advanced" layer is documented, not baked in.**
  `reference/clay-spec.md` has the full source palette, type scale and
  motion language this system draws from, including the parts (custom
  cursor, page transitions) intentionally left out of the base system.
  Add them later as an opt-in layer if you build that kind of site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Worth visiting first:

| Route | What's there |
| --- | --- |
| `/` | Overview and index of everything |
| `/foundations/colors` | The palette and how the token pairs work |
| `/foundations/motion` | The two easing curves and when each applies |
| `/components/button` | …and a page for every other component |
| `/components/link-underline` | The one primitive written for this system |
| `/patterns/section` | Sections that own their ground — the core layout idea |
| `/patterns/page-archetypes` | Three full page layouts, embedded live |
| `/playground/tokens` | Edit the theme live, copy the CSS back out |

## Working with this repo day to day

This repo lives on GitHub. To work on it from your own computer:

```bash
git clone https://github.com/FarnazShahriari/design-system.git
cd design-system
npm install
npm run dev
```

From then on:

```bash
git pull            # get the latest changes
# ...make edits...
git add -A
git commit -m "describe the change"
git push            # send changes back to GitHub
```

If two places (this cloud session and your laptop, say) both make
changes, `git pull` before you `git push` to merge them — completely
standard git, nothing design-system-specific about it.

## Changing the theme

Everything lives in `src/app/globals.css`:

- **Colours** — edit the hex values under `:root` (light) and `.dark`
  (dark). `--accent` is the one slot meant to change per brand/project;
  everything else is the shared neutral base. After changing any colour,
  run `npm run check:contrast` — it reads the tokens straight out of
  `globals.css` and checks every meaningful pair against WCAG AA.
- **Radius** — `--radius` controls the (near-zero, by design) default
  corner rounding for cards/inputs/buttons. `--radius-pill` (999px) is
  separate, for the one "real button" / chip shape.
- **Type scale** — the `--text-*` tokens in the `@theme inline` block.
  Each has paired `--text-<name>--line-height` /
  `--text-<name>--letter-spacing` / `--text-<name>--font-weight` values
  (a Tailwind v4 feature) that travel with it automatically.

## Adding a component

Most of the library is already here. For the ones deliberately left out
(`chart`, `form`, `calendar`, `drawer`, `resizable`, `input-otp`,
`sidebar`):

```bash
npx shadcn@latest add <component-name>
```

It lands in `src/components/ui/` already looking right, because it
references the same tokens as everything else. Two follow-ups:

1. Strip any `shadow-*` classes it arrives with — this system has none.
2. Add it to `src/showcase/entries/` so it shows up in the showcase.

## Building a page

Pages are a stack of `Section`s, each wrapping a `Container`. A section
owns its ground and its vertical rhythm:

```tsx
<Section theme="dark" rhythm="lg">
  <Container>
    <h2 className="text-h2">A dark band</h2>
    <Button>This inverts on its own</Button>
  </Container>
</Section>
```

The theme re-declares the colour tokens for everything inside it, so no
component needs an `onDark` prop. `/preview/case-study` is a real page
built this way — there is no bespoke layout code in it.

## Adding a page to the showcase

`src/showcase/registry.tsx` is the single source of truth. Navigation,
routing and static generation all derive from it, so adding an entry to
one of the files in `src/showcase/entries/` is the whole job.

## Project layout

```
src/
  app/
    globals.css          # the entire theme: colours, radius, type scale
    layout.tsx           # showcase shell: header, sidebar, theme provider
    page.tsx             # showcase overview
    (shell)/             # the docs shell: header, sidebar, entry routes
    (bare)/preview/      # page archetypes, rendered full width
  components/
    ui/                  # 47 components + the layout primitives
                         #   container.tsx / section.tsx / divider.tsx
    patterns/            # composed patterns (project grid)
    showcase/            # showcase-only UI (nav, theme toggle, playground)
  showcase/
    registry.tsx         # single source of truth for the showcase
    entries/             # the actual content, grouped by category
  lib/utils.ts           # the cn() class-merging helper
components.json          # shadcn CLI config (style, aliases)
reference/clay-spec.md   # the source palette/type/motion reference
CHECKLIST.md             # what's built and what's next
```

## Roadmap

See `CHECKLIST.md`. Next up is Phase 2: layout and page patterns
(container, section, divider, page archetypes), then a motion layer, then
packaging the system's conventions as Claude Skills.
