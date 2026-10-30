# Farnaz Design System

A restrained, editorial design system: 52 [shadcn/ui](https://ui.shadcn.com)-based components (Next.js + Tailwind v4 + Radix in the source) retokenized with a near-monochrome palette, one accent, almost-square corners, no shadows, and a tight, fluid Inter type scale. The visual language comes from clay.global (`reference/clay-spec.md`).

The source ships as an npm package, `@farnazshahriari/design-system`, which the owner's portfolio site (`FarnazShahriari/farnaz-portfolio`) installs. The source repo holds two things: the **package** (theme, components, patterns, motion, guardrail skills) and the **showcase**, a Next.js style guide that is also the package's first consumer. It also contains three **page archetypes** (work index, case study, about) that show how pages are built.

## Sources
- GitHub: **https://github.com/FarnazShahriari/design-system** (branch `main`). Key files: `packages/design-system/theme.css` (every token), `packages/design-system/src/components/ui/*.tsx`, `src/app/(bare)/preview/*` (archetypes), `src/showcase/entries/*`, `.claude/skills/*` (the four guardrail skills), `reference/clay-spec.md`.
- Related: https://github.com/FarnazShahriari/farnaz-portfolio — the site that consumes the package.

To go deeper, explore those repos directly. The `.claude/skills` files and `reference/clay-spec.md` explain the reasoning behind each rule.

## How this project maps to the source
- `styles.css` → imports `tokens/*` (fonts, colors, typography, spacing, motion, base) and `components/components.css`. The colour, section-theme and dark values are verbatim from `theme.css`.
- `components/components.css` translates each component's Tailwind classes into plain CSS classes (`ds-*`). The type utilities keep their source names: `.text-display`, `.text-h1`…`.text-h4`, `.text-lead`, `.text-meta`, plus `.text-xs/sm/base/lg`.
- The React components are lightweight, mostly cosmetic reimplementations. They follow the same prop API (variant/size/asChild-style triggers) without using Radix.

---

## CONTENT FUNDAMENTALS
- **Voice.** Plain, confident and editorial. It sounds like a small studio talking straight to a client. Sentences are short to medium, often built as a claim followed by its reason: "A component library that nobody enjoys using is not a design system; it is a tax."
- **Person.** Uses **we** for the studio and **you** for the reader or maintainer: "Work we can show you.", "Nothing upstream can change your UI overnight."
- **Casing.** Sentence case everywhere: headings, buttons, nav ("Start with foundations", "Back to all work", "Everything on one page"). The only uppercase is the eyebrow label (`text-meta uppercase tracking-wide`, e.g. "STYLE GUIDE", section names in the sidebar).
- **Headlines** are statements, sometimes ending with a full stop: "Tokens, then components.", "Work we can show you.". Case-study headings name an outcome: "Designing for everyday clarity", "One system, two platforms, no forks".
- **Leads** are a single sentence that says what the thing is for: "Telescope time, booked in a minute instead of a fortnight of email."
- **CTAs** are few and specific: "Start a project", "View case study", "Let's talk" (with a curly apostrophe). Most actions are text links, not buttons.
- **Docs copy** explains *why* and names the trade-off: "Use it for the primary call to action — and only one per page." Em dashes are used freely in docs.
- **No emoji. No exclamation marks.** British spelling appears in the docs (colour, harbour, fortnight).
- **Numbers** appear as index labels ("01", "02", "03") in muted meta type, and as filter counts in `<sup>`.

## VISUAL FOUNDATIONS
- **Colour.** Near-monochrome. The neutral ramp runs from #06070a to #ffffff. Foreground is near-black (#06070a, never #000), and the "black" surface is #171921. There is exactly **one accent**, `--accent` #33658a (a slate blue, lifted to #6aa0c8 in dark mode), and it is the one token meant to change per project. Destructive #cf3723 is used for errors only. Tokens come in bg/fg pairs; always use a matching pair.
- **Section themes carry the narrative.** Pages are stacked hard-edged bands in light (white), muted (#f3f4f6), dark (#171921) or accent. A band re-declares the tokens for everything inside it, so buttons invert on their own: on an accent band the primary button becomes a white pill. **Never gradients.**
- **Type.** Inter only, at two weights: 500 for body/lead/meta and 700 for display through h4 (cards and dialog titles use 600, from stock shadcn). No italics. The signature is negative tracking that scales with size: -0.045em at display, -0.04 at h1, -0.03 at h2, -0.02 at h3/h4, -0.01 at lead, 0 at meta. Sizes are fluid via `clamp()` (display 40→110px, h1 40→92px, h2 30→62px, h3 20→36px, h4 20→30px, lead 18→34px, meta 13→17px). Line-height is 1.05 on display. Geist Mono is used only for code paths.
- **Spacing.** A named step set: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120. Section rhythm is sm 32/40/48, default 40/64/80, lg 64/96/128 (at <768 / ≥768 / ≥1280). Container insets are 24px, then 40px from 768px, inside a 1400px band (narrow is 52rem). The grid is 12 columns with a 16px gutter. Only three breakpoints matter, and only the 768px one changes layout.
- **Corner radii.** Almost square: `--radius` is 2px, so md is 1.6px, lg 2px, xl 2.8px and sm 1.2px. **The pill (999px) is the one exception**, used for the single primary CTA per page, badges, avatars, switches and progress bars.
- **Shadows.** None. Depth comes from colour blocks and overlap. The only shadow in the system comes from the third-party toast (sonner). The outline button's shadow was removed on purpose.
- **Borders.** `--border` #e6e8eb is used for decorative 1px hairlines (cards, dividers, table rows). `--input` #8b94a2 is the 3:1 edge that identifies a control. The two are separate on purpose.
- **Cards** have a 1px border, 2.8px radius, no shadow, 24px padding and a 24px gap. Project cards have **no** border at all: a flat muted media block (4:3), then a truncated h4 title, a truncated muted description and outline pill tags.
- **Imagery.** The source only has flat `--muted` placeholder blocks with a centred meta label ("Full-bleed hero media"). Media is full-bleed (21:9 hero) or in locked aspect ratios (4:5, 16:9, 4:3) so nothing reflows. No photos or illustrations ship with the system.
- **Motion.** Two exponential-out curves: `ease-out-expo` (0.16,1,0.3,1) for anything the user triggers, and `ease-out` (0.19,1,0.22,1) for large surfaces the page moves. No ease-in-out, springs or bounces. The duration ladder is 150ms (hover colour), 350ms (underline wipe), 500ms (nudges, arrow slide), 900ms (reveal fade) and 1200ms (reveal settle). `Reveal` fades and rises 16px, fires **once**, and never re-animates on scroll-up. Reduced motion drops transforms but keeps opacity.
- **Hover states.** Links have a permanent muted 1px rule, and a currentColor rule wipes in from the left (350ms). Primary buttons drop to 90% opacity on hover, secondary to 80%. Outline and ghost buttons fill with the **accent** (blue) plus its foreground. Nav links go from muted to foreground. On the next-case teaser, the arrow slides 8px right.
- **Press/focus.** There is no press-shrink. Focus is a 3px ring at 50% of `--ring`, and `--ring` stays neutral on purpose (not derived from the accent) so focus stays visible whatever accent is chosen. Link focus is a 2px outline offset by 7px.
- **Transparency and blur.** Used only on the sticky showcase header (`bg-background/80` + `backdrop-blur-md`) and the 50% black modal overlay.
- **Layout rules.** A page is a stack of `Section`s, each wrapping a `Container`. No page wrapper sets its own max-width or padding. Two adjacent same-colour sections need a `Divider` between them. Don't stack two `lg` rhythms.
- **Selection.** Light mode uses #bcd4e6 on #06070a; dark mode uses #274c68 on white.

## ICONOGRAPHY
- The source uses **Lucide** (`lucide-react`) throughout: arrow-right, chevron-down/left/right, check, circle, x, menu, moon/sun, ellipsis, loader-2, info, triangle-alert, octagon-x, circle-check, bold/italic/underline, plus.
- **Stroke is thickened** to 2.25 via `--stroke-icon` (Lucide defaults to 2), so icons hold up next to the large type. Icons are 16px by default (12px in xs controls and badges, 20px in the accordion chevron, 36–56px for the next-case arrow).
- In this project, `Icon` (`components/core/Icon.jsx`) inlines SVGs from the **lucide-static CDN** (`unpkg.com/lucide-static@0.469.0`) so the stroke token applies. Use kebab-case names: `<Icon name="arrow-right" />`. Note that `loader-2` is named `loader-circle` in newer Lucide.
- No icon font, no PNG icons, **no emoji**, and no unicode-as-icon except ⌘-style key glyphs inside `Kbd`.
- **Logo:** the source has no logo. The brand mark is the words "Design System" set in `text-h4`. The repo's `public/*.svg` files are Next.js scaffold icons and were not imported.

---

## Index
- `styles.css` — the one file consumers link (imports only).
- `tokens/` — `fonts.css` (self-hosted Inter + Geist Mono), `colors.css` (ramp, semantic, .dark, section themes), `typography.css` (sizes + .text-* classes), `spacing.css` (spacing, radius, layout), `motion.css`, `base.css`.
- `assets/fonts/` — Inter and Geist Mono woff2 files (latin + latin-ext).
- `components/` — the React primitives plus `components.css`. Each directory has a `*.card.html`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Motion, Brand).
- `ui_kits/site/` — the portfolio page archetypes: work index, case study, about.
- `ui_kits/showcase/` — the style-guide docs app: overview, entry pages, sidebar.
- `SKILL.md`, `github.md`, `thumbnail.html`.

### Components
- **actions/** — Button, ButtonGroup, Toggle, ToggleGroup
- **forms/** — Input, Textarea, Label, NativeSelect, Select, InputGroup, Field
- **controls/** — Checkbox, RadioGroup, Switch, Slider
- **display/** — Badge, Avatar, Kbd, Separator, Skeleton, Spinner, Progress
- **content/** — Card, Item, Empty, Table, AspectRatio
- **disclosure/** — Accordion, Collapsible, Tabs, Carousel, ScrollArea
- **feedback/** — Alert, Toaster
- **navigation/** — LinkUnderline, Breadcrumb, Pagination, NavigationMenu, Menubar
- **overlays/** — Dialog, AlertDialog, Sheet, Popover, HoverCard, Tooltip
- **menus/** — DropdownMenu, ContextMenu, Command
- **layout/** — Container, Section, Divider, Grid
- **patterns/** — ProjectGrid (+ ProjectCard)
- **motion/** — Reveal (+ RevealGroup)
- **core/** — Icon

Every export (e.g. `CardHeader`, `DialogContent`, `SelectItem`) is available on the bundle namespace. Each family has a `.d.ts` and a `.prompt.md`.

### Intentional additions and deviations
- **Icon** — a Lucide wrapper, needed because there is no npm here. It stands in for `lucide-react`.
- **Button `pill` prop** — a shorthand for the source's `className="rounded-pill"`. **Button/Badge/Item `href`** stands in for `asChild` + Link.
- **Empty `bordered`** — the source class is `border-dashed` with a width supplied by the caller.
- **Toaster** — a minimal sonner-style stand-in. `Toaster.toast(...)` or `window.dsToast(...)`.
- Not ported: `ThemeProvider`, `MotionProvider` and `ViewTransition` (the shared-element title morph), and the token playground.
