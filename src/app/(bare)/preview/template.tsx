"use client"

import * as React from "react"
import { motion } from "motion/react"

import { duration, easeOut } from "@farnazshahriari/design-system/lib/motion"

/**
 * A route-enter transition for the archetype pages.
 *
 * `template.tsx` re-mounts on every navigation (unlike `layout.tsx`, which
 * persists), so it is the natural place for an enter animation in the App
 * Router — no AnimatePresence, no router event plumbing.
 *
 * This is deliberately just a cover-and-settle, not the shared-element
 * transition the source material uses. See the Motion page in the showcase
 * for why that one is deferred.
 */
export default function PreviewTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration.fade, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}
