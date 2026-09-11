# Design System

A living design system: 52 [shadcn/ui](https://ui.shadcn.com)-based
components (Next.js + Tailwind CSS v4 + Radix), retokenized with a
restrained, near-monochrome palette and a tight, fluid type scale inspired
by [clay.global](https://clay.global).

**It is an installable package**, not a folder to copy. Sites depend on
`@farnazshahriari/design-system`; change a token here, publish, and every
site that installs it follows on its next build. See
[`packages/design-system/README.md`](packages/design-system/README.md) to
install it into a project.

This repo is two things:

| | |
| --- | --- |
| `packages/design-system/` | The package — theme, components, patterns, motion, skills |
| everything else | The **showcase**, an interactive Next.js app that documents the system and is also its first consumer |

The showcase imports the package by name, exactly the way another project
would. That is deliberate: a packaging mistake breaks the showcase here,
before it reaches a real site.

Run the dev server and the whole thing is browsable: foundations (colour,
type, spacing, shape, motion), a page per component, layout patterns and
page archetypes, and a **token playground** where you can tune the theme
live and copy the CSS back out.

## Why this stack

- **One file controls the whole look.**
  `packages/design-system/theme.css` defines every colour, radius and
  type-scale value as a named token (`--primary`, `--muted-foreground`,
  `--radius`, `text-h1`, ...). No component contains a raw colour or size
  — they all reference tokens. That invariant is what makes the package
  model work: change a value there and it propagates to every component,
  in every site, on their next build.
- **Shipped as a dependency, on purpose.** shadcn's premise is that you
  copy the source and own every line, so nothing can break underneath
  you. The cost is that nothing can *improve* underneath you either. This
  system takes the other side of that trade, because the requirement was
  "change the button once, and it changes everywhere it's used." The
  source still ships in the package, so a component is always readable,
  and a project can override any token locally without forking.
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
| `/patterns/grid-and-breakpoints` | The 12-col grid, breakpoints, and a grid overlay |
| `/patterns/reveal` | The scroll-reveal primitive |
| `/playground/tokens` | Edit the theme live, copy the CSS back out |
| `/all` | Everything in one scroll |

Edits to `packages/design-system/` are picked up live — it is a workspace,
so there is no build or link step between the package and the showcase.

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

Everything lives in `packages/design-system/theme.css` — the file the
package ships and every consuming site imports:

- **Colours** — edit the hex values under `:root` (light) and `.dark`
  (dark). `--accent` is the one slot meant to change per brand/project;
  everything else is the shared neutral base. After changing any colour,
  run `npm run check:contrast` — it reads the tokens straight out of
  `theme.css` and checks every meaningful pair against WCAG AA, in both
  page themes and all four section themes.
- **Radius** — `--radius` controls the (near-zero, by design) default
  corner rounding for cards/inputs/buttons. `--radius-pill` (999px) is
  separate, for the one "real button" / chip shape.
- **Type scale** — the `--text-*` tokens in the `@theme inline` block.
  Each has paired `--text-<name>--line-height` /
  `--text-<name>--letter-spacing` / `--text-<name>--font-weight` values
  (a Tailwind v4 feature) that travel with it automatically.

A change here reaches other sites when it is published and they install
it. Locally, a project can also depart from the system on purpose by
redeclaring a token *after* the theme import — see the package README.

## Shipping a change to every site

This is the loop the whole package structure exists for.

```bash
# 1. change something — a token in packages/design-system/theme.css,
#    a component, a pattern
npm run check:contrast          # if you touched a colour
npm run build                   # the showcase is the first consumer;
                                #   if it breaks, so would a real site

# 2. give it a version
npm version minor --workspace @farnazshahriari/design-system

# 3. release it
git commit -am "describe the change" && git tag v1.1.0
git push && git push --tags
```

The tag is what publishes — pushing to a branch never does. That keeps
"I edited a token" and "every site that installs this will get it" as two
separate decisions, which matters because npm versions are immutable: a
bad theme reaches everyone who updates, and the only fix is another
release.

If you can't push a tag (an agent sandbox is usually scoped to one branch
ref), run the **Publish design system** workflow from the Actions tab
instead. It publishes whatever version `package.json` names and then
creates the matching tag itself, so a release is still findable in git and
not only in the registry.

On the consuming side there is nothing to do but `npm update`, or just
deploy — a caret range picks up the new version on the next install. Change
the button here, and it changes on every site that uses it.

**Choosing the number:** patch for a fix that changes nothing visually,
minor for a new component or a tuned value, major for anything that would
make an existing page look wrong. A design system's "breaking change" is
visual, not just an API signature.

## Adding a component

Most of the library is already here. For the ones deliberately left out
(`chart`, `form`, `calendar`, `drawer`, `resizable`, `input-otp`,
`sidebar`):

```bash
npx shadcn@latest add <component-name>
```

Move it into `packages/design-system/src/components/ui/` — it already
looks right, because it references the same tokens as everything else.
Three follow-ups:

1. Strip any `shadow-*` classes it arrives with — this system has none.
2. Rewrite its `@/` imports as relative paths, so it resolves inside a
   consumer's `node_modules`.
3. Add it to `src/showcase/entries/` so it shows up in the showcase.

The `add-component` skill covers this checklist; it fires automatically.

## Motion

Animation uses [Motion](https://motion.dev). Two curves and a duration
ladder live in the package's `src/lib/motion.ts`; `Reveal` is the only
scroll primitive:

```tsx
<Reveal>            {/* fade + rise, settles once, never re-animates */}
  <h1 className="text-display">Northwind</h1>
</Reveal>
```

Navigating from a project card to its case study morphs the title: the two
elements share a `<ViewTransition name>`, so the browser moves and scales
one piece of text between routes rather than fading one out and another in.
Try it at `/preview/work-index`.

`prefers-reduced-motion` is handled once in the root layout by
`<MotionConfig reducedMotion="user">` — transforms are dropped, opacity is
kept, and no primitive checks the query itself. Hover and focus states stay
in CSS, where they belong.

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

## Conventions, enforced

`.claude/skills/` holds four guardrail skills that keep work consistent with
the system. They are committed, so Claude Code picks them up automatically
for anyone who clones the repo — nothing to install.

| Skill | Fires when |
| --- | --- |
| `design-tokens` | Any colour, radius, type or spacing value |
| `page-patterns` | Building or editing a page or layout |
| `add-component` | Adding or modifying anything in `components/ui/` |
| `motion-recipes` | Any animation, transition or hover effect |

They exist because these are the four places a design system actually
drifts: raw values instead of tokens, hand-rolled layout instead of the
primitives, components that arrive not matching, and invented motion. To
apply them in your other repos too, see `.claude/skills/README.md`.

## Project layout

```
packages/design-system/        # THE PACKAGE — what other sites install
  theme.css                    #   the entire theme: colours, radius, type scale
  package.json                 #   exports map, deps, GitHub Packages config
  src/
    index.ts                   #   barrel (deep imports are preferred)
    components/
      ui/                      #   52 components + the layout primitives
                               #     container.tsx / section.tsx / divider.tsx / grid.tsx
      patterns/                #   composed patterns (project grid)
      motion/                  #   Reveal / RevealGroup / ViewTransition / MotionConfig
    lib/utils.ts               #   the cn() class-merging helper
    lib/motion.ts              #   easing curves and the duration ladder
  skills/                      #   the guardrail skills, shipped to consumers
  README.md                    #   install & wire-up guide

src/                           # THE SHOWCASE — the package's first consumer
  app/
    globals.css                #   six lines: Tailwind + the theme import
    layout.tsx                 #   providers
    (shell)/                   #   the docs shell: header, sidebar, entry routes
    (bare)/preview/            #   page archetypes, rendered full width
  components/showcase/         #   showcase-only UI (nav, theme toggle, playground)
  showcase/
    registry.tsx               #   single source of truth for the showcase
    entries/                   #   the actual content, grouped by category

.claude/skills/                # the four guardrail skills (active in this repo)
scripts/check-contrast.mjs     # WCAG AA audit, reads theme.css directly
reference/clay-spec.md         # the source palette/type/motion reference
CHECKLIST.md                   # what's built and what's next
```

## Roadmap

See `CHECKLIST.md`. Phases 0–5 are done: tokens, 52 components, the layout
layer, motion, the convention skills, and distribution as an installable
package. Next is Phase 6 — the accessibility pass, a mobile-width audit,
and tagging v1.0.
