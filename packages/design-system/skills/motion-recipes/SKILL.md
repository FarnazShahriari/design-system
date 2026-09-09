---
name: motion-recipes
description: How things move in this design system — the two easing curves, the Reveal primitive, the shared-element title morph, and the reduced-motion rule. Use this whenever animation, transition, hover effect, scroll behaviour or page transition is involved in this repo, including requests like "make this fade in", "animate this on scroll", "add a hover effect", "this feels janky", or "can the transition be smoother". Also use it before adding any duration, easing or keyframe.
---

# Motion recipes

**The invariant this protects: two easing curves and three reveal recipes.
Anything outside that needs a reason, because a page whose elements each
move slightly differently reads as unfinished even when nobody can say why.**

## The division of labour

- **CSS owns hover, focus and state changes.** A pseudo-class transition
  costs nothing and never re-renders. The underline link is two
  pseudo-elements and a transform — correct as CSS, wrong as JavaScript.
- **Motion owns orchestration** — scroll reveals, staggers, route enters.
  Viewport triggers and reduced-motion handling are fiddly and are not
  design decisions, which is why the library earns its place here.

## The vocabulary

In `packages/design-system/src/lib/motion.ts`, matching the CSS values:

| Token | Value | For |
| --- | --- | --- |
| `easeOutExpo` | `0.16, 1, 0.3, 1` | The default. Anything the user triggered. |
| `easeOut` | `0.19, 1, 0.22, 1` | Large surfaces the page moves itself. |

Durations: `instant` .15s (hover colour), `quick` .35s (underline wipe),
`short` .5s (nudges), `fade` .9s (opacity on a reveal), `settle` 1.2s
(position on a reveal).

Both curves are exponential-out. Nothing overshoots, nothing bounces, and
there is no ease-in-out anywhere — that is what makes the whole thing feel
calm rather than springy.

## Revealing on scroll

```tsx
<Reveal>                      {/* rise-fade: the default */}
  <h1 className="text-display">Northwind</h1>
</Reveal>
<Reveal variant="fade" />     {/* opacity only — for media */}
<Reveal variant="rise" />     {/* position only */}
<Reveal delay={0.1} />        {/* offset a following element */}
```

In `rise-fade` the position settles slower than the fade, so an element
arrives before it has finished moving. That lag is the detail that reads as
composed; matching the two durations makes it feel abrupt.

Reveals fire **once**. Re-animating on scroll-up is the fastest way to make
a page feel cheap.

`RevealGroup` staggers direct children. Don't reach for it on a long grid —
index-based delays make scrolling feel laggy, and the work grid gets its
rhythm from the column offset instead.

## The shared-element morph

Navigating from a project card to its case study morphs the title: the word
travels and scales instead of one fading out while another fades in.

Both sides wrap the element in `ViewTransition` with the **same name**:

```tsx
import { ViewTransition } from "@/components/motion/view-transition"
import { projectTitleTransition } from "@/lib/view-transition-names"

<ViewTransition name={projectTitleTransition(slug)} share="morph" default="none">
  <h1 className="text-display">{project.title}</h1>
</ViewTransition>
```

Things worth knowing before you touch it:

- `share="morph"` and `default="none"` go together. With `default="none"`
  and no `share`, the pair silently stops morphing.
- The naming helper lives in the package's `src/lib/`, not the client
  wrapper, because
  server components need to call it.
- The wrapper degrades to rendering children untouched where the API is
  absent — navigation still works, it just doesn't animate.
- The morph only plays if the destination renders in the same commit, which
  means it needs to be prefetched. A destination that suspends into a
  fallback first won't pair.

To verify a morph is real rather than a default crossfade, check what the
browser animates mid-navigation — you want
`::view-transition-group(<your-name>)`, not just `(root)`.

## Reduced motion

Handled once, globally, by `<MotionConfig reducedMotion="user">` in the root
layout, plus a media query for the view-transition pseudo-elements.
Transforms are dropped, opacity is kept.

**Don't check `prefers-reduced-motion` inside a component.** It is already
handled above you, and a second check usually disables something that was
meant to survive.

## Guardrails

- No new easing curves. If a motion feels wrong, it is nearly always the
  duration, not the curve.
- No `ease-in-out`, springs or bounces — they belong to a different system.
- Nothing animates on scroll-up, and nothing re-reveals.
- Animate `transform` and `opacity`. Animating width, height, top or left
  costs layout on every frame.
