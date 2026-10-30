# Showcase docs app

Recreation of the style-guide shell in FarnazShahriari/design-system (`src/app/(shell)/`, `src/components/showcase/sidebar-nav.tsx`, `theme-toggle.tsx`, `[...slug]/page.tsx`).

- `Shell.jsx` — sticky 64px header with backdrop blur, "Design System" wordmark in text-h4, ghost icon theme toggle; 240px sticky sidebar (≥1024px) or a left Sheet on mobile.
- `Overview.jsx` — the "/" page, copy verbatim.
- `EntryPage.jsx` — per-entry page: section eyebrow, h1, lead, origin Badge + note, bordered example panels.
- `registry.jsx` — Button / Button group / Toggle entries are verbatim from `entries/actions.tsx`. Foundation entries are condensed; the other ~45 component entries and the token playground are not recreated (see the component cards instead).

Theme toggle flips `.dark` on <html>, exactly like next-themes does in the source.
