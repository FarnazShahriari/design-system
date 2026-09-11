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

## Phase 4 — The system's conventions as skills (done)

Four **guardrail** skills, in `.claude/skills/`. They cover the four places
drift actually happens rather than trying to document everything:

- [x] `design-tokens` — fires on any colour, radius, type or spacing value.
      The invariant: no component contains a raw literal. Includes the
      three things that surprise people (why `--ring` is not derived from
      `--accent`, why `--border` and `--input` differ, why the dark accent
      is lighter) so nobody "fixes" them back
- [x] `page-patterns` — fires on building or editing any page or layout.
      The invariant: a page is a stack of Sections wrapping Containers, and
      no component ever takes an `onDark` prop
- [x] `add-component` — fires on adding or modifying anything in
      `components/ui/`. Strip shadows, check both themes and 390px,
      register it in the showcase, run the checks
- [x] `motion-recipes` — fires on any animation or transition. Two curves,
      three reveal recipes, the morph's naming contract, and the rule that
      reduced motion is already handled above you
- [x] Committed to the repo, so anyone who clones it gets them with nothing
      to install — and they are active in this session
- [x] Verified by giving a subagent a task designed to tempt every
      violation (a new page with a dark hero, cards, and an accent band).
      Zero violations: no raw hex, no shadows, no hand-rolled container or
      padding — it reached for Section/Container/rhythm and the type scale
      unprompted. The test also surfaced two things worth keeping:
      - `CardTitle` sets `leading-none` and `DialogTitle` sets `text-lg
        leading-none`. Since `cn()` merges font-size and line-height as
        separate groups, `<CardTitle className="text-h4">` silently loses
        the line-height that travels with the token. Documented in
        `design-tokens` with the fix (a real heading inside `CardHeader`)
      - The "don't stack two large rhythms" rule was too absolute: it holds
        when the ground continues, but a section on a *different* ground
        still needs its own padding or its content touches the colour edge.
        `page-patterns` now says which is which

**On personal/account-level skills:** the repo copy already covers this
project and anyone who imports it. To apply the same conventions in *other*
repos, copy the four directories into `~/.claude/skills/` — the command is
in `.claude/skills/README.md`. This has to be run on your own machine: the
cloud sandbox's `~/.claude/skills/synced/` is a read-only mirror of account
skills and the container is ephemeral, so anything written there from here
would not survive the session.

## Phase 5 — Make it importable for new projects (done)

The open decision from Phase 4 is settled, and it went further than the
options on the list. A template repo and a plain clone both distribute a
*copy*: change a button here afterwards and nothing that started from that
copy ever hears about it. The requirement was the opposite — one change
here reaching every site built on it — so the system had to become a real
installable dependency.

- [x] **Distribution: a published npm package on GitHub Packages**,
      `@farnazshahriari/design-system`. Private to the account, no registry
      to host, `npm install` and `npm update` are the whole interface
- [x] The repo is now an **npm workspace**. The design system moved into
      `packages/design-system/` (60 files); the showcase stayed at the root
      and became the package's **first consumer**, importing it by name like
      any other project would. Dogfooding is the point — the showcase
      breaking is how a packaging mistake gets caught before a real site
      hits it
- [x] **`theme.css` extracted** from the app's `globals.css` and shipped by
      the package. The app's `globals.css` is now six lines: Tailwind, the
      theme import, and an `@source` pointing at the package source
- [x] Package-internal imports converted from `@/` aliases to relative
      paths, so the source resolves inside a consumer's `node_modules`
      where no alias config of ours exists
- [x] **Ships TypeScript source, not a build.** Consumers add
      `transpilePackages`, which costs one config line and buys away a
      build step, a sourcemap story, and a `"use client"` boundary that
      bundlers routinely mangle. The `@source` line in the consumer's CSS
      is the other load-bearing piece: Tailwind does not scan
      `node_modules`, and without it the components arrive unstyled
- [x] Dependencies split correctly: Radix/cmdk/embla/motion/lucide belong
      to the package; `next`/`react`/`react-dom` are peers so a consumer
      never gets a second React. `lucide-react` was pinned a major behind
      the app, which silently installed two copies of an icon library —
      ranges now match and npm dedupes
- [x] `packages/design-system/README.md` — install, the three wire-up
      steps, updating, and **how to depart from the system on purpose**
      (redeclare a token after the theme import, so the difference is one
      visible line instead of a fork)
- [x] The four guardrail skills ship inside the package too, so a consuming
      project can copy them into its own `.claude/skills/` and be held to
      the same conventions
- [x] Verified end to end: typecheck clean, lint clean, 48 static pages
      built, `check:contrast` green — all with every component resolved
      through the package name rather than a local path

**The trade-off, stated plainly:** this inverts shadcn's founding premise.
Their pitch is that you own every line and nothing can break underneath
you; the cost is that nothing can *improve* underneath you either. We took
the other side, because "change the button here and it changes everywhere"
was the actual requirement. The escape hatch is that the source still
ships — a component can be read, and a token can be overridden per project
without forking anything.

- [x] **Publishing on a version tag** (`.github/workflows/publish.yml`).
      A tag publishes; a branch push never does — editing a token and
      making every site pick it up should be two decisions, because npm
      versions are immutable and a bad theme can only be fixed forward.
      It runs the full check suite first (including the showcase build,
      which is a real rehearsal of a consumer's install) and refuses to
      publish if the tag and the package version disagree.
      `ci.yml` runs the same checks on every push, so failures surface
      while they are still cheap
- [x] **Install path verified from outside the repo.** `npm pack`ed the
      tarball, installed it into a bare Next app in a temp directory, and
      wired it up using only what the package README says — the three
      lines, nothing borrowed from this repo. It builds, and the CSS it
      produces was compared against the showcase's own build: of 377
      utility rules emitted by both, all are identical. The section
      themes, the type scale and the pill radius all arrive intact. What
      the consumer *doesn't* get is Tailwind's stock palette that the
      showcase happens to use — correct tree-shaking, not a gap

## Phase 6 — Polish & v1.0

- [ ] Accessibility pass: focus states, contrast (`--muted-foreground`
      and friends against both light and dark backgrounds), keyboard
      nav through dialog/dropdown/tabs
- [ ] Expand the style-guide page to show patterns and page archetypes,
      not just atomic components
- [x] **v1.0.0 published**, `@farnazshahriari/design-system` on GitHub
      Packages, tagged `v1.0.0`. 69 files. Pulled forward from the rest of
      Phase 6 because it was blocking real use in another project — the
      polish items below do not need to land first
- [ ] README/CHECKLIST cleanup
- [x] ~~Open a PR into `main`~~ — there is no `main`. This branch is the
      repository's default branch, so there is nothing to merge into

Publishing surfaced one thing worth recording: a tag push from an agent
sandbox is refused with a 403 while branch pushes succeed, because the
session's git credentials are scoped to a single branch ref. The publish
workflow now creates the tag itself after a successful publish, so a
release is reachable by hand from the Actions tab and still ends up
findable in git.

## Known limitation — installing needs a token

The repository is private, so the package is too. GitHub Packages also
requires authentication for *every* npm read, public packages included, so
this does not go away by making the repo public. Any project installing
this system needs a personal access token with `read:packages` in its
`~/.npmrc` — the two lines are in the package README. Worth knowing before
handing the package to a CI runner or another sandbox, which will not have
one unless it is given one.

---

**Next up:** the rest of Phase 6 — the accessibility pass, the
mobile-width audit carried over from Phase 1, and the doc cleanup. The
system is installable and in use while that happens.
