import { MotionDemo } from "@/components/showcase/motion-demo"
import { BreakpointPreview } from "@/components/showcase/breakpoint-preview"
import type { Entry } from "@/showcase/types"

export const motionEntries: Entry[] = [
  {
    slug: "reveal",
    title: "Reveal",
    description:
      "The scroll-reveal primitive. Three recipes and only three — a fade, a rise, and both together. Everything that reveals on a page uses one of them, which is what keeps a long page feeling like one gesture rather than a collection of effects.",
    origin: "custom",
    originNote:
      "src/components/motion/reveal.tsx, built on Motion (formerly Framer Motion).",
    examples: [
      {
        label: "The three recipes",
        note: "Press replay to run them again. In rise-fade the position settles slower than the fade, so the element arrives before it has finished moving — that lag is the detail that makes it read as calm rather than snappy.",
        node: <MotionDemo />,
      },
      {
        label: "In a real page",
        note: "The case-study archetype reveals its hero, its media and each band. Scroll the frame — each element reveals once and never re-animates on the way back up, which is the difference between considered and cheap.",
        node: <BreakpointPreview src="/preview/case-study/northwind" height={700} />,
      },
    ],
  },
  {
    slug: "motion-approach",
    title: "Motion approach",
    description:
      "Why Motion rather than hand-written CSS, what the vocabulary is, and the one piece of the source material deliberately left unbuilt.",
    origin: "custom",
    originNote: "src/lib/motion.ts holds the tokens.",
    examples: [
      {
        label: "Why a library at all",
        note: "The easing curves and the duration ladder live on the Motion foundations page; src/lib/motion.ts is the same values as cubic-bezier arrays. What Motion adds is the orchestration — viewport triggers, staggering, and reduced-motion handling — which is a lot of fiddly code to own for no design benefit.",
        node: (
          <p className="max-w-[62ch] text-sm text-muted-foreground">
            The system&rsquo;s rule is that you own your components. That
            argument is weaker for animation plumbing than it is for markup:
            an IntersectionObserver wrapper is not a design decision, and
            hand-rolling one buys nothing you would ever want to change.
          </p>
        ),
      },
      {
        label: "CSS still does the hover states",
        note: "Motion owns anything orchestrated — reveals, staggers, route enters. Hover and focus stay in CSS, where they belong: the underline link is two pseudo-elements and a transform, and wrapping that in JavaScript would buy nothing and cost a re-render on every pointer move.",
        node: (
          <p className="max-w-[62ch] text-sm text-muted-foreground">
            The division is worth keeping deliberately. If a state can be
            expressed as a CSS transition on a pseudo-class, it should be.
          </p>
        ),
      },
      {
        label: "Reduced motion",
        note: "Handled once, globally, by <MotionConfig reducedMotion=\"user\"> in the root layout. Motion drops transform-based animation and keeps opacity for everything beneath it — the exact fallback the spec asks for — so no primitive checks the media query itself.",
        node: (
          <p className="max-w-[62ch] text-sm text-muted-foreground">
            Turn on “reduce motion” in your OS and reload: the reveals below
            still fade, but nothing travels.
          </p>
        ),
      },
      {
        label: "What is deliberately not built",
        note: "The source material's signature move is a shared-element page transition: the next project's colour band grows out of the block you clicked and becomes the next page's hero, with the title never fading.",
        node: (
          <div className="max-w-[62ch] space-y-3 text-sm text-muted-foreground">
            <p>
              It is deferred, and the reason is scope rather than difficulty.
              It needs a persistent overlay outside the routed subtree,
              measured geometry captured at click time, and a route commit
              hidden inside the animation — roughly the amount of machinery
              the rest of this system contains put together.
            </p>
            <p>
              What exists instead is a route-enter fade on the archetype
              pages, via <code>template.tsx</code>, which re-mounts on every
              navigation. It costs eight lines and covers the case that
              actually matters: arriving somewhere without a flash.
            </p>
          </div>
        ),
      },
    ],
  },
]
