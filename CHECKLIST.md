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

## Phase 1 — Full component pass (customize the whole library, not just 12)

- [ ] Inventory shadcn's full component list and decide which we actually
      need for portfolio/digital-product work (likely: everything from
      Phase 0 plus accordion, sheet, select, checkbox, radio-group,
      switch, table, breadcrumb, skeleton, sonner/toast, progress,
      command/combobox, navigation-menu, pagination, popover)
- [ ] Pull each one in via `npx shadcn add <name>` (from your machine,
      since `ui.shadcn.com` is blocked from this cloud sandbox)
- [ ] Go through each component and check it actually reads as
      "clay-inspired" once themed — not every component looks right from
      tokens alone (e.g. shadows on `popover`/`select`/`command` need an
      explicit override, since the source material forbids shadows)
- [ ] Add the one non-standard piece the source material treats as its
      "workhorse" interaction: a **text link with an animated underline**
      (clay's primary link style — shadcn has no equivalent primitive)
- [ ] Re-check every component in dark mode, not just light
- [ ] Re-check every component at mobile width, not just desktop

## Phase 2 — Patterns: spacing, grid, layout, page structure

- [ ] Formalize the spacing rhythm as documented steps (not enforced —
      just written down and used consistently): a short, named scale
      derived from `reference/clay-spec.md` §Spacing rhythm
- [ ] Define **one** container/grid primitive (max-width + responsive
      side margins) — clay's version has 7 breakpoints; ours should be
      2–3 max, kept in one place
- [ ] Define reusable **section** pattern: a wrapper that owns background
      theme (light/off-white/dark/accent) and vertical padding, so pages
      are built by stacking sections rather than one-off divs
- [ ] Define a **divider** pattern (a plain spacer block) for breathing
      room between two same-theme sections
- [ ] Define 2–3 **page archetypes** as documented layouts (not
      necessarily code yet): a hero + content page (portfolio case
      study), a grid/archive page (project list), a simple content page
      (about/contact) — simplified from clay's case-study / work-archive
      / home structure
- [ ] Define a **card/grid** pattern for project or work listings
      (staggered two-column, per clay, or a simpler single responsive
      grid — decide which fits "simple")

## Phase 3 — Patterns: interaction & motion (the "advanced" layer)

- [ ] Pick a motion approach: hand-written CSS (matches clay exactly, more
      maintenance) vs. Framer Motion (less bespoke code, nearly the same
      feel) — this was flagged as a decision in the original plan, still
      open
- [ ] Build one **scroll-reveal** primitive (fade / rise-and-fade),
      single IntersectionObserver-based implementation, reveals once
- [ ] Wire the underline-link hover animation from Phase 1 into a real,
      reusable interaction (not just a static style)
- [ ] Decide whether to build a simplified **page-transition** effect at
      all for v1, or explicitly defer it (it's the single heaviest,
      most bespoke piece of the source material — see
      `reference/clay-spec.md`'s "what we deliberately did not port")
- [ ] Add `prefers-reduced-motion` handling to every motion primitive
      before calling this phase done

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

**Next up:** Phase 1. Say the word and I'll start with the full
component pull + the underline-link primitive, since everything in
Phase 2–4 assumes the component set is settled first.
