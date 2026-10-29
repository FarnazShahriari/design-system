/**
 * The motion vocabulary, in one place.
 *
 * One curve now, not two. The brand specifies a single easing —
 * cubic-bezier(.22, 1, .36, 1), "slow out, never bouncy" — so both names
 * below resolve to it. They are kept as separate exports because what
 * still differs is *duration*: the brand puts UI response at 500-800ms
 * and leaves longer for motion the page starts on its own. Nothing
 * overshoots, nothing bounces, and there is no ease-in-out anywhere.
 *
 * The same curve is Tailwind's `ease-out` in this system (theme.css
 * overrides --ease-out), so a CSS transition and a Motion animation move
 * identically without either side being told about the other.
 */

/** The brand curve. */
const brandEase = [0.22, 1, 0.36, 1] as const

/** Anything the user triggered: hover, click, focus. Short, feels like a response. */
export const easeOutExpo = brandEase

/** Anything the page triggered: reveals, panels, transitions. Long, feels composed. */
export const easeOut = brandEase

/**
 * The duration ladder. User-initiated motion lives at the short end,
 * page-initiated at the long end; mixing the two is what makes an
 * interface feel either sluggish or twitchy.
 *
 * The brand's UI range is 500-800ms, which is slower than this ladder
 * used to be — `quick` and `short` moved up into it. The reveal
 * durations did not move: they were already long and composed.
 */
export const duration = {
  /** hover colour changes — below the brand's UI range on purpose, a
      colour swap that takes half a second reads as lag, not calm */
  instant: 0.2,
  /** underline wipes, control states */
  quick: 0.5,
  /** the pill, small nudges, the line's segment glide */
  short: 0.65,
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
