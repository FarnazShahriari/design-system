/**
 * The motion vocabulary, in one place.
 *
 * Two easing curves, both exponential-out. Nothing overshoots, nothing
 * bounces, and there is no ease-in-out anywhere — see
 * reference/clay-spec.md. These are the same curves the CSS transitions
 * use, expressed as cubic-bezier arrays for Motion.
 */

/** Anything the user triggered: hover, click, focus. Short, feels like a response. */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const

/** Anything the page triggered: reveals, panels, transitions. Long, feels composed. */
export const easeOut = [0.19, 1, 0.22, 1] as const

/**
 * The duration ladder. User-initiated motion lives at the short end,
 * page-initiated at the long end; mixing the two is what makes an
 * interface feel either sluggish or twitchy.
 */
export const duration = {
  /** hover colour changes */
  instant: 0.15,
  /** underline wipes, control states */
  quick: 0.35,
  /** the pill, small nudges */
  short: 0.5,
  /** opacity on a revealing element */
  fade: 0.9,
  /** position on a revealing element — deliberately slower than its fade */
  settle: 1.2,
} as const

/** How far a revealing element travels. Small: this is a settle, not an entrance. */
export const revealOffset = 16

/**
 * A generous threshold, so nothing pops in while it is already fully on
 * screen — and `once`, because re-animating on scroll-up is the single
 * fastest way to make a page feel cheap.
 */
export const revealViewport = { once: true, amount: 0.15 } as const
