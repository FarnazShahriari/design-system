# design-sync notes — @farnazshahriari/design-system

## Repo shape

- **No build, no `dist`, no `.d.ts` tree.** The package deliberately ships
  TypeScript source: `exports["."]` is `./src/index.ts` and consumers add
  `transpilePackages`. The converter therefore runs in **synth-entry mode**
  against `src/index.ts`. Do not "fix" this by adding a dist build without
  talking to the owner — shipping source is a deliberate decision documented
  in the package README.
- Components live in `packages/design-system/src/components/{ui,patterns,motion}`.

## The CSS has to be compiled first — every sync

The package ships **no stylesheet**. Its components are styled entirely by
Tailwind utility classes, which only exist once Tailwind has scanned the
component source. Point `cssEntry` at `theme.css` and every preview renders
with the right colours and no layout at all — the utilities simply are not
there.

Before each build, regenerate the compiled stylesheet:

```sh
npx @tailwindcss/cli -i packages/design-system/.ds-tw-entry.css \
                     -o packages/design-system/.ds-compiled.css
```

`.ds-tw-entry.css` is committed (it is three lines and explains itself);
`.ds-compiled.css` is generated and gitignored. `cfg.cssEntry` points at the
generated file.

## Three things the converter needs that this repo does not naturally provide

Each cost a build cycle to find. All three are wired up now; none should
need rediscovering.

### 1. A `.d.ts` tree, and a root `index.d.ts` shim

With no `dist` and no types, discovery found **zero** components
(`[ZERO_MATCH]`) even though the JS bundle built fine. Two separate things
were missing:

- `findTypesRoot()` looks for `build/ts`, `dist/types`, `types`, `lib`,
  `dist` — so declarations must be emitted to **`types/`** (a dot-prefixed
  dir is never found).
- `projectFor()` computes its entry as `<pkgRoot>/index.d.ts` and does not
  use the types root it just resolved. With no `types` field in
  package.json that path does not exist, so the project loaded 61 files and
  still saw no exports.

Both are satisfied by generating, before each build:

```sh
cd packages/design-system
npx tsc -p tsconfig.json --declaration --emitDeclarationOnly --noEmit false --outDir types
# plus the one-line root shim: export * from "./types/index";
```

`types/` and `index.d.ts` are both gitignored and **excluded from the
package's `files`**, so neither is ever published. The package still ships
TypeScript source exactly as before.

### 2. `process` does not exist in a browser

`LinkUnderline`, `ProjectGrid` and the view-transition helper import
`next/link` / `next/navigation`, which drags Next's client runtime into the
bundle. It reads `process.env.__NEXT_ROUTER_BASEPATH` and friends at module
scope, so **all 244 components threw `ReferenceError: process is not
defined`** before rendering anything.

Fixed by `.design-sync/process-shim.mjs`, wired through `cfg.extraEntries`.
It lives at the repo root deliberately — the package declares
`sideEffects: ["*.css"]`, which would let esbuild drop a side-effect-only
module inside it. The converter emits `extraEntries` ahead of the main
entry, so the shim runs first.

Defining the Next flags alone would not work: they are read off
`process.env`, so `process` itself has to exist.

### 3. Playwright must match the cached chromium

The sandbox caches **chromium build 1243** at `/opt/pw-browsers`. Installing
latest playwright pulls a build that is not there and fails with
`Executable doesn't exist`. **playwright 1.63.0** is the release that pins
1243 — install exactly that and the render check runs with no download.
On a different machine, check the local cache's build number and find the
matching release in `playwright-core/browsers.json`.

## Known render warns (triaged — not new)

- `ThemeProvider` renders at 0px height. Correct: it is a provider that
  renders only its children and has no visual output of its own.

## Preview-authoring gotchas (found while authoring, worth keeping)

- **The CSS scope bug, now fixed.** `.ds-compiled.css` originally scanned only
  `./src`, so any utility a preview used that the library source did not
  happen to use was silently absent — the class reached the DOM, matched no
  rule, and the card rendered wrong with **no build error and no capture
  error**. `tabular-nums`, the whole `my-*` scale, `aspect-[4/3]`,
  `grid-cols-3` and most fractional widths were all missing. Both `@source`
  lines in `.ds-tw-entry.css` are load-bearing; do not drop the previews one.
- **`Separator` vertical collapses.** `data-[orientation=vertical]` resolves to
  `h-full`, which is zero inside a flex row — the parent needs an explicit
  height (`h-5` inline, `h-10` for a stat strip).
- **`Skeleton` ships `rounded-md`.** The brand is square by default, so
  previews pass `rounded-none`.
- **`PaginationPrevious` / `PaginationNext` render as `<a>`**, so the
  `disabled:` variants in `buttonVariants` never fire. Use `aria-disabled`
  plus `pointer-events-none` for an inert control.
- **Compound leaf parts** (`BreadcrumbEllipsis`, `PaginationEllipsis`,
  `RadioGroupItem`) are a few pixels alone. Author their preview as the full
  parent composition — it is the only render that is true anyway, and it is
  what clears the blank-card flag.
- **Remote images do not load in the capture environment.** Use
  `AvatarFallback` initials rather than `AvatarImage` with a URL.

## Re-sync risks

- **Stale `.ds-compiled.css`.** It is gitignored, so a fresh clone has none and
  a stale one silently ships yesterday's tokens. Always regenerate — it takes
  under a second.
- **Tailwind version drift.** The compile uses whatever `@tailwindcss/cli`
  resolves to (4.3.3 at the time of writing). A major Tailwind change alters
  the generated utilities under the components without any source change here.
- **No `.d.ts` tree.** Prop contracts are extracted from source by ts-morph
  rather than from shipped types, so they are weaker than a built package's.
  If the design agent starts misusing an API, that is the first place to look.
