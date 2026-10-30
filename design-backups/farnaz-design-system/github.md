repo: FarnazShahriari/design-system
branch: main

## Last sync
date: 2026-09-30T13:42:39Z

### Updated in this project
- Tokens copied verbatim from packages/design-system/theme.css (palette, .dark, section themes, type scale)
- 52 ui components + layout, ProjectGrid, Reveal rebuilt as lightweight React
- UI kits: site archetypes (work index, case study, about) and showcase docs shell

## Screen map
| Project screen | Repo files |
| --- | --- |
| tokens/*.css | packages/design-system/theme.css |
| components/** | packages/design-system/src/components/ui/*.tsx, patterns/project-grid.tsx, motion/reveal.tsx, lib/motion.ts |
| ui_kits/site/WorkIndex.jsx | src/app/(bare)/preview/work-index/page.tsx, projects.ts |
| ui_kits/site/CaseStudy.jsx | src/app/(bare)/preview/case-study/[slug]/page.tsx |
| ui_kits/site/About.jsx | src/app/(bare)/preview/about/page.tsx |
| ui_kits/showcase/Shell.jsx | src/app/(shell)/layout.tsx, src/components/showcase/sidebar-nav.tsx, theme-toggle.tsx |
| ui_kits/showcase/Overview.jsx | src/app/(shell)/page.tsx |
| ui_kits/showcase/EntryPage.jsx, registry.jsx | src/app/(shell)/[...slug]/page.tsx, src/showcase/registry.tsx, src/showcase/entries/actions.tsx |
