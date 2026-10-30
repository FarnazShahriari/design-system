# Site archetypes (portfolio)

Recreation of `src/app/(bare)/preview/` in FarnazShahriari/design-system — the three page archetypes built only from the system's primitives.

- `WorkIndex.jsx` — statement + filter list (active filter marked with a dot, not a colour) → staggered `ProjectGrid` → dark "Let's talk" band.
- `CaseStudy.jsx` — display title → lead → 21:9 full-bleed media → 57.5/42.5 split (copy / services + back link) → muted band with two 4:5 media → Divider → dark band → accent "Next case study" teaser with sliding arrow.
- `About.jsx` — one narrow (52rem) column throughout.
- `projects.js` — the six example projects, verbatim from `projects.ts`.

Click a project card to open its case study; the accent teaser cycles to the next project. A small switcher sits bottom-left. The source's shared-element title morph (View Transitions) is not reproduced.
