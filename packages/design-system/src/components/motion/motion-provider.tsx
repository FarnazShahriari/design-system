"use client"

import * as React from "react"
import { MotionConfig } from "motion/react"

/**
 * `reducedMotion="user"` is the whole reduced-motion story for this system:
 * Motion drops transform-based animation and keeps opacity for every
 * component beneath it, which is exactly the fallback the spec asks for.
 * No primitive needs to check the media query itself.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
