# Design system — build checklist

How we get from "shadcn with a clay-inspired palette" to a ready-to-import
design system for building portfolio sites and other digital products.
Ordered in the sequence we'll actually work through it — each phase
depends on the one before it.

## Phase 0 — Foundation (done)

- [x] Repo scaffolded: Next.js (App Router) + TypeScript + Tailwind CSS v4
- [x] shadcn/ui wired up (`components.json`, `cn()` helper, source pulled
      from the real shadcn-ui/ui repo)
- [x] First theme pass: clay's palette, near-zero radius + pill token,
      fluid type scale — mapped onto shadcn's *existing* token names
- [x] 12 starter components installed and re-themed automatically via
      those tokens (button, card, badge, input, label, textarea,
      separator, dialog, dropdown-menu, avatar, tabs, tooltip)
- [x] Homepage doubles as a first-draft style guide
- [x] `reference/clay-spec.md` — condensed source material to build the
      later phases from

## Phase 1 — Full component pass (done)

- [x] Expanded to **47 components**, pulled as one consistent snapshot from
      the shadcn-ui/ui repo (their registry API is blocked from this cloud
      sandbox; `npx shadcn add` works normally from your machine)
- [x] Stripped every `shadow-xs/sm/md/lg` from the component sources — the
      no-shadows rule now holds system-wide. Overlays separate themselves
      with a border and an opaque surface instead
- [x] Added the **underline link** primitive (`link-underline.tsx`) — the
      one piece shadcn has no equivalent for
- [x] Verified in dark mode
- [ ] Audit every component at mobile width (deferred to the Phase 6
      responsive pass, where it belongs alongside the layout patterns)

Deliberately skipped, and why: `chart` (pulls recharts; data-viz is its own
concern), `form` (pulls react-hook-form; validation, not visual design),
`calendar` (react-day-picker; not needed for portfolio work), `combobox`
(pulls a second primitive library, Base UI), `drawer`, `resizable`,
`input-otp`, `sidebar`, and the AI-chat components. Any of them can be
added later with one command.

## Phase 1.5 — Interactive showcase (done)

- [x] Sidebar-navigated showcase app replacing the single-page style guide
- [x] One route per topic, all statically generated from a single registry
      (`src/showcase/registry.tsx`) — adding a page means adding one entry
- [x] Light/dark toggle that persists across navigation
- [x] Foundations pages: colour, typography, spacing, shape, motion —
      documenting the *rules*, not just showing swatches
- [x] Every component page labelled by origin: stock / modified / custom,
      with a note explaining any modification
- [x] **Token playground**: edit colours and radius live against a preview,
      then copy the generated CSS back into `globals.css`

## Phase 2 — Patterns: spacing, grid, layout, page structure (done)

- [x] Spacing rhythm documented as a named step set on the Spacing
      foundations page. Not enforced — the steps map onto Tailwind's
      default scale, so this is discipline about which values to reach
      for, not a config override
- [x] **Container** — the one container primitive. The source material
      steps its margins across seven breakpoints; this is the same shape
      at three (24px / 40px from tablet / centred 1400px band), with
      `narrow` and `wide` variants
- [x] **Section** — owns the ground it sits on and its vertical rhythm.
      The theme is a data attribute that re-declares the colour tokens
      for the subtree, so a button, caption or border inside a dark or
      accent band inverts on its own. No component takes an `onDark`
      prop, and none ever should
- [x] **Divider** — a block of nothing at the section rhythm, so two
      same-coloured bands can breathe without doubling their padding
- [x] **ProjectGrid / ProjectCard** — the work-listing pattern. Whole
      card is one link, titles never wrap, optional column stagger
- [x] Three **page archetypes**, built only from the primitives above
      and viewable as real pages: `/preview/case-study`,
      `/preview/work-index`, `/preview/about`
- [x] Showcase gains a Patterns section, with the archetypes embedded
      live at real width

Two things this phase settled that were not on the list:

- The accent section theme derives its tokens from `--accent`, which
  makes the "don't put a default button on an accent band" rule from the
  colour pass unnecessary — inside an accent section a default Button
  inverts to a legible white pill automatically.
- `check:contrast` now covers the section themes in both page themes.
  That caught a real failure: the dark accent band's caption sat at
  3.79:1, because a mid-luminance ground leaves almost no headroom to
  mute against. The dark accent was lifted to #6aa0c8 to buy it back.

## Colour pass (done, unplanned — pulled forward from Phase 6)

- [x] Accent moved to #33658a, with a lifted #6aa0c8 for dark
- [x] Fixed three pre-existing AA failures the change surfaced:
      `--muted-foreground`, the accent surface itself, and the input
      boundary (split from the decorative `--border`)
- [x] `npm run check:contrast` — reads the tokens out of globals.css and
      checks every meaningful pair, so the next accent swap is
      verifiable rather than hoped-for

## Phase 3 — Interaction & motion (done)

- [x] **Decision made: Motion** (the library formerly called Framer Motion,
      now the `motion` package). The system's "you own every line" rule is
      a strong argument for markup and weak for animation plumbing — an
      IntersectionObserver wrapper is not a design decision, and
      hand-rolling one buys nothing anyone would want to change
- [x] **Reveal** primitive with three recipes and only three: fade, rise,
      rise-fade. In rise-fade the position settles slower than the fade, so
      an element arrives before it stops moving — the detail that reads as
      calm rather than snappy. Reveals once; never re-animates on scroll-up
- [x] **RevealGroup** for staggering direct children, with a warning in the
      source against using it on long grids
- [x] `src/lib/motion.ts` — the easing curves and duration ladder as
      cubic-bezier arrays, the same values the CSS transitions use
- [x] `prefers-reduced-motion` handled once, globally, by
      `<MotionConfig reducedMotion="user">` in the root layout. Transforms
      are dropped and opacity kept; no primitive checks the query itself.
      Verified in a real reduced-motion browser context: opacity 1,
      transform none
- [x] Hover states stay in CSS. The underline link is two pseudo-elements
      and a transform; wrapping that in JavaScript would buy nothing and
      cost a re-render on every pointer move
- [x] **Shared-element page transition — built.** Initially deferred on the
      grounds that it needs a persistent overlay, geometry captured at click
      time and a route commit hidden inside the animation. That reasoning
      described how the source site did it in 2024 and is now out of date:
      React's `<ViewTransition name>` pairs the elements and the browser
      interpolates position and size, so the whole thing is declarative.
      A project title on the work index and the same title on its case-study
      page share one name, and the word travels and scales between routes
      instead of one fading out while another fades in.
      - `/preview/case-study/[slug]` is a real route per project, so the
        morph has somewhere to land; the next-case teaser carries the *next*
        project's name, so the chain continues
      - Verified by inspecting what the browser animates mid-navigation:
        `::view-transition-group(project-title-northwind)` with its old/new
        pair, not just a default crossfade
      - Degrades to a plain navigation where the API or the component is
        absent, and reduced motion keeps the crossfade but drops the travel
      - Also kept: the route-enter fade via `template.tsx`

## Showcase additions (done, alongside Phase 3)

- [x] **BreakpointPreview** — renders a real page at 390 / 768 / 1280px,
      with a Compare mode putting mobile and desktop side by side. Frames
      are scaled to fit and labelled with the scale, so the grid can be
      judged at both widths without leaving the page
- [x] **Everything on one page** (`/all`) — every foundation, pattern and
      component in one scroll, for judging whether the parts add up to a
      system rather than looking one up
- [x] **Grid & breakpoints** page — the 12-column grid, a table of what
      actually changes at each of the three breakpoints, and a **Grid
      toggle** that draws the real column guides over the real pages. The
      overlay renders inside the previewed page and uses the same Container,
      so the guides are the true margins rather than an approximation
- [x] **Grid primitive** (`src/components/ui/grid.tsx`) — 12 columns, 16px
      gutter; children place themselves with `col-span-*`

## Phase 4 — Package it all as Claude Skills

- [ ] Set up `.claude/skills/` in this repo
- [ ] `design-tokens` skill — how to read/change a color, radius, or
      type-scale value in `globals.css`, and the rule "never hard-code a
      value in a component"
- [ ] `add-component` skill — the correct way to pull in and re-theme a
      new shadcn component consistently with this system
- [ ] `page-patterns` skill — how to assemble a page from the Phase 2
      primitives (container, section, divider, archetypes) instead of
      writing new layout code each time
- [ ] `motion-recipes` skill — how to apply the Phase 3 interaction
      patterns (which easing/duration for what, when to use the reveal
      primitive, the reduced-motion rule)
- [ ] Use the `skill-creator` skill to actually author and validate each
      of the above as proper `SKILL.md` files (frontmatter, trigger
      description, procedure, guardrails) rather than plain docs
- [ ] Confirm: opening this repo in a fresh Claude Code session actually
      surfaces and uses these skills correctly on a test task

## Phase 5 — Make it importable for new projects

- [ ] Decide the distribution mechanism (this is a real decision, not a
      default): a **GitHub template repository** (simplest — "Use this
      template" or `create-next-app -e`) vs. a **self-hosted component
      registry** (lets `npx shadcn add` pull from *our* library instead
      of shadcn's, more setup) vs. a plain **git clone as starting
      point**
- [ ] Strip anything project-specific (this style guide's own copy, the
      placeholder accent color) into a documented "first things to
      change when starting a new project" step
- [ ] Write a short "starting a new project from this system" guide

## Phase 6 — Polish & v1.0

- [ ] Accessibility pass: focus states, contrast (`--muted-foreground`
      and friends against both light and dark backgrounds), keyboard
      nav through dialog/dropdown/tabs
- [ ] Expand the style-guide page to show patterns and page archetypes,
      not just atomic components
- [ ] README/CHECKLIST cleanup, tag a `v1.0`
- [ ] Open a PR from `claude/design-system-setup-c6t1cj` into `main`

---

**Next up:** Phase 4 — packaging the system's conventions as Claude Skills,
so a fresh session in this repo produces work that matches it without being
told. Phase 5's distribution question (template repo vs. self-hosted
registry) is still open and worth deciding before then.
