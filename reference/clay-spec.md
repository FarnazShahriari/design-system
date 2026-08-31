# Reference: the clay.global visual & motion language

This is a condensed version of a reverse-engineered spec for clay.global —
the site whose look and feel this design system borrows from for its
"advanced" layer. It's kept here as **reference**, not as rules the code
must literally implement. `src/app/globals.css` adapts the parts that fit
a general-purpose, "simple to change" design system (palette, radius,
tight type tracking, spacing rhythm); it deliberately leaves out the
parts that are specific to a single content-heavy agency site (custom
cursor, shared-element page transitions, 10 breakpoints, ~100 keyframes).
If you want that full experience layer later, this doc is the spec to
build it from.

## Principles

- The page is a slow reveal, not a document: content enters displaced,
  scaled and transparent, then settles — long durations (0.9–1.3s),
  exponential-out easing, never a bounce.
- Colour blocks carry the narrative: hard-edged sections in white,
  off-white, near-black, or a single accent colour — never gradients.
- Editorial restraint: huge, tight type; generous whitespace; full-bleed
  media; one accent colour per context, used sparingly.

## Non-negotiables

- Mobile-first CSS; two typefaces/two weights only; no italics.
- Almost no border-radius — square by default, pills (999px) are the one
  exception, reserved for the primary action.
- No drop shadows — depth comes from colour blocks and overlap.

## Colour (verbatim tokens from the source spec)

```
--color-black:      #06070a
--color-white:      #ffffff
--color-gray-5:     #f3f4f6  /* off-white */
--color-gray-100:   #e6e8eb
--color-gray-200:   #cbd0d6
--color-gray-300:   #b2b8c2
--color-gray-400:   #989fab
--color-gray-500:   #7f8694  /* labels, captions */
--color-gray-600:   #666c7a
--color-gray-700:   #4e5361
--color-gray-800:   #353945  /* hairline dividers, dark */
--color-gray-850:   #252833
--color-gray-900:   #171921  /* the "black" surface */
--color-blue-200:   #bacdff  /* ::selection on light */
--color-blue-600:   #31356d  /* ::selection on dark */
--color-red-600:    #cf3723  /* error only */
```

`src/app/globals.css` maps these directly onto shadcn's semantic tokens
(`--background`, `--foreground`, `--primary`, `--muted`, `--destructive`,
etc.) — see that file's comments for the exact mapping.

## Typography

- One display/heading family (weight ~700) + one body weight (~500). No
  third weight, no italics.
- Negative letter-spacing that *scales with size* — the single most
  recognisable signature: roughly 0 at 14px and below, tightening to
  about -0.04 to -0.05em at display sizes.
- Heading scale (source, mobile → large desktop): h1 40→122px, h2
  30→72px, h3 20→40px, h4 22→36px — stepped across 7 breakpoints.
- Body scale: lead 18→40px, default 16→36px, secondary 15→28px, meta
  14→22px.

The design system's `text-display` / `text-h1..h4` / `text-lead` /
`text-meta` utilities in `globals.css` are a **fluid, 2-breakpoint
simplification** of this (via `clamp()`), keeping the tight-tracking
signature without seven discrete breakpoint rules to maintain.

## Spacing rhythm

Not a linear 4/8 scale — a small named step set used consistently:
`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 100, 120`. This is close
enough to Tailwind's default spacing scale that no override was needed
— just prefer these step values over arbitrary ones.

## Motion tokens (for a future advanced/motion layer)

```
--ease-out:      cubic-bezier(0.19, 1, 0.22, 1)   /* clip-paths, big surfaces */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)     /* default for content */
```

Rule of thumb: anything the *user* triggers (hover, click) is short
(0.2–0.55s) and uses `ease-out-expo`; anything the *page* triggers on its
own (reveals, panel opens) is long (0.65–1.5s) and uses `ease-out` or
`ease-out-expo`. Never `ease-in-out`, never a spring/bounce.

Canonical reveal recipe: `opacity 0→1` over 0.9s, `translateY(15px)→0`
over 1.2s, both `ease-out-expo`, triggered once via an IntersectionObserver
(never re-hidden on scroll up).

## What we deliberately did not port

- The custom cursor that replaces the pointer over media.
- The shared-element "next case study" page transition (colour band
  growing from a clicked block into the next page's hero).
- The 7–10 tier responsive breakpoint ladder and its ~100 hand-written
  keyframes.

These are excellent for a single, content-heavy portfolio site with a
"next case study" narrative structure. They are not "design system"
concerns — they're page-level interaction design for one specific kind
of site. Build them as a separate, opt-in layer on top of this system
if and when you build that kind of site, rather than baking them into
every component.
