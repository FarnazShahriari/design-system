# Design System

A simple, ownable design system: [shadcn/ui](https://ui.shadcn.com)
components (Next.js + Tailwind CSS v4 + Radix), retokenized with a
restrained, near-monochrome palette and tight, fluid type scale inspired
by [clay.global](https://clay.global). Open `/` after running the dev
server for a live style guide of every token and component.

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

Open [http://localhost:3000](http://localhost:3000) — that page *is*
the style guide.

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
  everything else is the shared neutral base.
- **Radius** — `--radius` controls the (near-zero, by design) default
  corner rounding for cards/inputs/buttons. `--radius-pill` (999px) is
  separate, for the one "real button" / chip shape.
- **Type scale** — the `--text-*` tokens in the `@theme inline` block.
  Each has paired `--text-<name>--line-height` /
  `--text-<name>--letter-spacing` / `--text-<name>--font-weight` values
  (a Tailwind v4 feature) that travel with it automatically.

## Adding a component

```bash
npx shadcn@latest add <component-name>   # e.g. select, sheet, accordion
```

This pulls the official component source into `src/components/ui/` and
it will already look right, because it references the same tokens as
everything else. (Note: this command needs to reach `ui.shadcn.com`,
which is blocked from *this* cloud sandbox's network — it will work
fine from your own machine.)

## Project layout

```
src/
  app/
    globals.css      # the entire theme: colours, radius, type scale
    page.tsx          # the live style guide
    layout.tsx
  components/ui/      # shadcn component source — yours to edit
  lib/utils.ts         # the cn() class-merging helper
components.json         # shadcn CLI config (style, aliases)
reference/clay-spec.md  # the full source palette/type/motion reference
```

## Roadmap / not yet built

- A motion layer (scroll reveal, underline-link hover, optional page
  transitions) as a small opt-in set of primitives — see
  `reference/clay-spec.md` for the tokens to build it from.
- Dark mode *toggle* — the tokens already support `.dark`, there's just
  no switch UI yet.
