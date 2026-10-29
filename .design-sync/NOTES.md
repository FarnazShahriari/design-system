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

## Two library bugs this import found (both fixed in 3.0.0)

Neither was a design-sync problem. Both were real defects in the shipped
design system that authoring previews exposed.

### `cn()` was deleting every type-role utility

`tailwind-merge` does not know this system's type roles. It sees `text-h2`,
fails to match a known font size, and files it under **text colour** — so
any colour utility later in the same call deleted it:

```js
cn("text-h2", "text-muted-foreground")  // -> "text-muted-foreground"
```

Silently. The heading simply rendered at the inherited size, which reads as
a design mistake rather than a bug. Every component pipes className through
`cn()`, so it reached all of them. `src/lib/utils.ts` now uses
`extendTailwindMerge` to register display/h1-h4/lead/body/meta/label as
font-size classes. Add any new type role to that list or it will be eaten
the same way.

### Raw colour utilities in six components

The "no component contains a raw colour" invariant was only ever verified by
grepping for hex. Tailwind palette utilities bypass tokens just as
effectively, and six were in the library: `text-white` on the destructive
Button and Badge, `bg-black/50` on three overlays, and `bg-white` on the
Slider thumb — which did not invert on a dark section.

All now tokenised. The overlays needed a new `--overlay` token rather than
an existing one, because a scrim has to stay dark in **both** themes and
`--foreground` is paper in the dark one. **Grep for colour utilities, not
just hex, when checking this invariant.**

## Preview authoring: things the harness does, and does not, do

- **No provider is configured.** `cfg.provider` is unset, so each cell is
  wrapped in nothing. Anything Radix-context-based must carry its own
  provider inside the preview — every Tooltip export wraps itself in
  `TooltipProvider`, or it throws at mount. `Toaster` and friends will need
  the same.
- **`preview-rebuild.mjs` never recompiles the stylesheet.** A class is
  compiled only if it was on disk at the last Tailwind compile, so a preview
  written *after* the last compile can still introduce a silently dead
  class. Regenerate `.ds-compiled.css` after writing previews and before
  trusting a sheet.
- **Overlays do not need `cfg.overrides`.** The graded shot is a per-cell
  `?story=` render that already uses the full-viewport single path, so
  `cardMode: "single"` buys nothing. `defaultOpen` is enough for Dialog and
  Tooltip.
- **Radix popovers: reach for `position="popper"` before a card-mode
  override.** `Select`'s default `item-aligned` puts the open menu *over*
  the trigger and clips the first group; `position="popper" side="bottom"
  align="start"` renders the whole composition below it.
- **`DialogTrigger` paints above the overlay** in a `defaultOpen` dialog:
  `.ds-single { transform: translateZ(0) }` makes the render root a stacking
  context, so the portalled scrim lands behind the trigger. It looks like a
  rendering bug in the sheet. Omit the trigger from open cells and show it
  in a separate closed cell. The same will hit AlertDialog, Sheet, Popover
  and DropdownMenu.
- **`CardHeader`/`CardFooter` padding is conditional** on `[.border-b]` /
  `[.border-t]`. Without the border class they sit tight — that is the
  contract, not a spacing bug.
- **`AvatarGroup`'s `-space-x-2` clips two-letter initials** at `default`
  and `sm` (an "LH" reads as "LI"). Only `lg` has room. A real component
  constraint.
- **`Alert` has no icon in these previews** — its icon column correctly
  collapses to zero. An icon variant would need `lucide-react`, which the
  barrel does not re-export.

## Capture viewports

Cells are shot `fullPage: false` at 900x700, so a taller or wider
composition clips with no warning. Two components need more room and have
`cfg.overrides` entries: `Container` (its three widths are identical below
832px, so the difference the preview exists to show is invisible) and
`ProjectGrid` (a four-project grid is ~900px tall). Any preview that wants
to show responsive behaviour needs the same treatment.

## More preview-authoring gotchas

- **`bg-background` is invisible inside a themed Section.** The section
  re-declares `--background` to its own ground, so the element and its
  parent end up the same colour. Use `bg-muted` on a light section, or
  `bg-card` on a muted one.
- **`Reveal` cannot reach its end state in a capture.** The clock is pinned
  and `whileInView` never completes, so `fade` and `rise-fade` photograph at
  opacity 0 — three blank cells, no error. Pass `initial="shown"` in the
  preview; it overrides only the starting frame. `RevealGroup` will need the
  same.
- **Do not capture while a full build is running.** It produces phantom
  `missing <Name>.html` and `React is not defined` errors and wipes
  `_screenshots/`. Let `package-build.mjs` finish first.

## An open question for the owner

`Label` hard-codes `text-sm` (14px, sentence case), but the brand says
labels **are** uppercase 13px at +10% tracking.

Half of this is now fixed. Tailwind does emit `.text-label` *before*
`.text-sm`, so on raw cascade order `text-sm` would win — but the `cn()`
repair above puts both in the font-size group, so `<Label
className="text-label">` now correctly drops the base `text-sm`. Verified.

What remains is a design decision, not a bug: should `Label` apply
`text-label` itself, so every form label is uppercase 13px by brand
default? Or do sentence-case form labels stay, with `text-label` reserved
for eyebrows and meta rows? Undecided — ask the owner.

Note the form previews still carry the older workaround (a plain
`<span className="text-label">` inside the Label). It renders correctly and
is harmless, but it is no longer necessary; simplify it next time those
files are touched.

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
