---
name: add-component
description: How to add a new UI component to this design system so it matches the rest of it. Use this whenever a component is being added, installed or created in this repo — including "npx shadcn add", "we need a date picker", "add a carousel", "can you build a stepper component" — and whenever an existing component in src/components/ui/ is being modified. Covers the no-shadows rule, both-theme checking, and registering it in the showcase.
---

# Adding a component

**The invariant this protects: a component matches the system before it is
used anywhere, not after somebody notices it looks wrong.**

There are already 47 components in `src/components/ui/`. Check whether one
covers the need before adding anything — the most common mistake is adding
a near-duplicate of something that exists.

## Installing

```bash
npx shadcn@latest add <name>
```

It lands in `src/components/ui/` and will already be close, because it
references the same token names as everything else. (This command needs
`ui.shadcn.com`, which is blocked from the cloud sandbox but works fine
locally. From the sandbox, copy the source from the `shadcn-ui/ui` repo and
rewrite `from "cn"` → `from "@/lib/utils"` and `@/registry/new-york-v4/ui/`
→ `@/components/ui/`.)

Deliberately not installed, each for a reason: `chart` (pulls recharts),
`form` (pulls react-hook-form — validation, not visual design), `calendar`,
`combobox` (a second primitive library), `drawer`, `resizable`,
`input-otp`, `sidebar`. Adding one of these is a real decision about a new
dependency, not a routine install.

## Making it match

1. **Strip every `shadow-*` class.** This system has no shadows anywhere —
   depth comes from colour blocks and overlap. Overlays already carry a
   border, so removing the shadow leaves them well separated. Keep
   `shadow-none` where it appears.
2. **Leave the token references alone.** Do not replace `bg-primary` with a
   literal, and do not add an `onDark` variant — section themes handle that
   (see the page-patterns skill).
3. **Check the radius.** The system is near-square; pills are only for
   buttons and badges. A component arriving with `rounded-xl` should
   usually become `rounded-md`.
4. **Look at it in both themes and at 390px**, not just light and desktop.

## Registering it

A component nobody can find gets rebuilt by the next person. Add an entry
to the right file in `src/showcase/entries/` — the section it belongs to is
usually obvious from the existing groupings — and mark its origin honestly:

- `restyled` — stock, themed purely by tokens
- `modified` — you changed the source; say what and why in `originNote`
- `custom` — no upstream equivalent

`src/showcase/registry.tsx` derives navigation, routing and static
generation from those entries, so adding the entry is the whole job.

## Before calling it done

```bash
npx tsc --noEmit && npm run lint && npm run build
```

If you touched any colour, `npm run check:contrast` too.

## Guardrails

- Don't hand-edit a colour into a component to fix how it looks on some
  background. That is a section-theme problem, not a component problem.
- Don't introduce a third radius or a new easing curve to accommodate one
  component — either it fits the system or the system needs a deliberate
  change.
- Vendored files in `src/components/ui/` stay close to upstream so future
  `shadcn add` updates apply cleanly. Restyle class strings freely; think
  twice before rewriting their React logic.
