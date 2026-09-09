"use client"

import * as React from "react"
import { motion, type Variants } from "motion/react"

import {
  duration,
  easeOutExpo,
  revealOffset,
  revealViewport,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

/**
 * The scroll-reveal primitive. Three recipes, and only three: a fade, a
 * rise, and both together. Everything on a page that reveals uses one of
 * them, which is what keeps a long page feeling like one gesture rather
 * than a collection of effects.
 *
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user">
 * in the root layout: transforms are dropped and opacity is kept, which is
 * exactly the fallback the spec asks for. Nothing here needs to check.
 */

type RevealVariant = "fade" | "rise" | "rise-fade"

const VARIANTS: Record<RevealVariant, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: duration.fade, ease: easeOutExpo } },
  },
  rise: {
    hidden: { y: revealOffset },
    shown: { y: 0, transition: { duration: duration.settle, ease: easeOutExpo } },
  },
  "rise-fade": {
    hidden: { opacity: 0, y: revealOffset },
    shown: {
      opacity: 1,
      y: 0,
      transition: {
        // the position settles slower than the fade, so the element arrives
        // before it finishes moving — the detail that makes it feel calm
        opacity: { duration: duration.fade, ease: easeOutExpo },
        y: { duration: duration.settle, ease: easeOutExpo },
      },
    },
  },
}

function Reveal({
  variant = "rise-fade",
  delay = 0,
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div> & {
  variant?: RevealVariant
  delay?: number
}) {
  const variants = React.useMemo(() => {
    if (!delay) return VARIANTS[variant]
    const base = VARIANTS[variant]
    const shown = base.shown as Record<string, unknown>
    return {
      ...base,
      shown: {
        ...shown,
        transition: { ...(shown.transition as object), delay },
      },
    } as Variants
  }, [variant, delay])

  return (
    <motion.div
      data-slot="reveal"
      initial="hidden"
      whileInView="shown"
      viewport={revealViewport}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * Staggers its direct children. Keep the step small enough that the group
 * still reads as one gesture — and do not reach for this on a long grid,
 * where index-based delays make scrolling feel laggy. The work grid gets
 * its rhythm from the column offset instead.
 */
function RevealGroup({
  step = 0.06,
  variant = "rise-fade",
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof motion.div>, "children"> & {
  step?: number
  variant?: RevealVariant
  // motion.div's children type admits MotionValues, which Children.map cannot
  // walk; this component only ever wraps real nodes.
  children?: React.ReactNode
}) {
  return (
    <motion.div
      data-slot="reveal-group"
      initial="hidden"
      whileInView="shown"
      viewport={revealViewport}
      variants={{ shown: { transition: { staggerChildren: step } } }}
      className={cn(className)}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={VARIANTS[variant]}>{child}</motion.div>
      ))}
    </motion.div>
  )
}

export { Reveal, RevealGroup }
