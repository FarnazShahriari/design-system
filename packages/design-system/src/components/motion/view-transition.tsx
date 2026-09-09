"use client"

import * as React from "react"

/**
 * A thin, typed wrapper over React's <ViewTransition>.
 *
 * Two reasons this file exists rather than importing ViewTransition
 * directly. First, it ships in the React canary the App Router runs on,
 * ahead of the stable @types/react, so it needs a typed lookup. Second,
 * where the component or the browser API is absent this renders children
 * untouched — navigation still works, it just does not animate, which is
 * the correct degradation for a purely visual enhancement.
 */

export type ViewTransitionProps = {
  /** Pairs an element on the outgoing page with one on the incoming page. */
  name?: string
  /** Class applied to the morph, so CSS can target ::view-transition-group(.morph). */
  share?: string
  /**
   * "none" stops a named pair animating during unrelated transitions.
   * When set, `share` must be given explicitly or the pair stops morphing.
   */
  default?: string
  enter?: string
  exit?: string
  children: React.ReactNode
}

const ReactViewTransition = (
  React as unknown as {
    ViewTransition?: React.ComponentType<ViewTransitionProps>
  }
).ViewTransition

export function ViewTransition({ children, ...props }: ViewTransitionProps) {
  if (!ReactViewTransition) return <>{children}</>
  return <ReactViewTransition {...props}>{children}</ReactViewTransition>
}
