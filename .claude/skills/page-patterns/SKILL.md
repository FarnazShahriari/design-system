---
name: page-patterns
description: How pages are assembled in this design system — Container, Section, Divider, Grid, and the three page archetypes. Use this whenever you are building or editing a page, a route, or any full-width layout in this repo, and whenever a request sounds like "add a section", "build a landing page", "make a case study page", "lay this out", or "put this on a dark background". Also use it before writing any wrapper div with max-width, horizontal padding or vertical padding.
---

# Page patterns

**The invariant this protects: a page is a stack of `Section`s wrapping
`Container`s. Nothing else defines horizontal insets or vertical rhythm.**

When a page hand-rolls `max-w-[1200px] px-8 py-20`, it looks right once and
then drifts from every other page the first time anything changes.

## The four primitives

```tsx
<Section theme="dark" rhythm="lg">
  <Container>
    <h2 className="text-h2">A dark band</h2>
    <Button>This inverts on its own</Button>
  </Container>
</Section>
```

- **`Container`** — the only thing that sets horizontal insets.
  `width="default"` (1400px band), `"narrow"` (reading width, for long-form),
  `"wide"` (edge to edge inside the insets).
- **`Section`** — owns the ground and the vertical rhythm.
  `theme`: `light` | `muted` | `dark` | `accent` | `inherit`.
  `rhythm`: `none` | `sm` | `default` | `lg`.
- **`Divider`** — a block of nothing at the section rhythm. Use it between
  two same-coloured sections so they can breathe without doubling padding.
  It draws nothing; a visible rule is `Separator`, which is a different idea.
- **`Grid`** — 12 columns, 16px gutter. Children place themselves with
  `col-span-*`. Most pages never need it; `Container` plus flex or a simple
  two-column grid covers the majority.

## The section theme is the important idea

`theme` re-declares the colour tokens for everything inside the section. A
button, caption, link or border inside a dark or accent band inverts on its
own.

**This means no component ever takes an `onDark` prop, and none should.** If
you find yourself wanting to pass a variant down so something reads on a
dark background, the answer is almost always that it should be inside a
`Section theme="dark"` instead.

The accent theme derives its tokens from `--accent`, so a default `Button`
on an accent band becomes a legible pale pill automatically rather than the
near-black one that would go shapeless there.

## Composing a page

Stack sections and alternate the ground. Two rules keep the rhythm honest:

- Two adjacent sections with the same theme need a `Divider` between them,
  or they read as one band.
- Don't stack two large rhythms back to back — a `rhythm="lg"` hero followed
  by a `rhythm="lg"` section is ~250px of dead space. **When the ground
  continues** (both sections the same theme), give the second one
  `rhythm="none"` and let the hero's bottom padding do the work; that is
  what `work-index` and `about` do. **When the ground changes colour**, the
  second section still needs its own padding or its content will touch the
  colour edge — step it down to `rhythm="default"` rather than to `none`.

## The three archetypes

Real pages, built only from the primitives, in `src/app/(bare)/preview/`:

| Archetype | Shape | Use for |
| --- | --- | --- |
| `case-study/[slug]` | Hero → full-bleed media → 57.5/42.5 info split → alternating bands → accent teaser | A project, a story, anything long with media |
| `work-index` | Statement + filter list → staggered project grid | A listing of anything |
| `about` | One narrow column throughout | Long-form: about, contact, writing |

Read the closest one before building something new. They are short, and
copying their structure is faster and more consistent than deriving it.

## Responsive

Three breakpoints, and only the middle one changes layout:

- **< 768px** — one column everywhere.
- **≥ 768px (`md`)** — the structural switch: two-column grids, the card
  stagger, the info split.
- **≥ 1280px (`xl`)** — no new layout, only scale: margins stop growing,
  type reaches its ceiling, rhythm steps to 80px.

If you are adding a fourth breakpoint, stop and reconsider the layout.

## Guardrails

- No `max-w-*` or horizontal padding on a page wrapper — that is `Container`.
- No bespoke `py-*` on a section — that is `rhythm`.
- No `bg-*` on a page-level wrapper to make a dark band — that is `theme`.
- Check any new page at 390px before calling it done. The showcase's
  Compare view (`/patterns/grid-and-breakpoints`) renders a real page at
  mobile and desktop side by side, with a grid overlay.
