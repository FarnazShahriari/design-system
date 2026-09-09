"use client"

import * as React from "react"
import NextLink from "next/link"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * The workhorse link interaction of this system (see reference/clay-spec.md).
 *
 * Two stacked 1px rules sit under the label: a permanent resting rule in a
 * muted tone, and a currentColor rule that wipes in from the left on hover.
 * The permanent rule means colour is never the only affordance, so the link
 * stays legible to everyone without relying on the hover state.
 *
 * Renders a next/link by default; pass `href` with an external URL and it
 * still works, or use `asChild` to wrap something else entirely.
 */
function LinkUnderline({
  className,
  asChild = false,
  href,
  children,
  ...props
}: Omit<React.ComponentProps<typeof NextLink>, "href"> & {
  asChild?: boolean
  href?: string
}) {
  const Comp = asChild ? Slot.Root : href ? NextLink : "span"

  return (
    <Comp
      data-slot="link-underline"
      // @ts-expect-error -- href is required by NextLink but absent for span/Slot
      href={href}
      className={cn(
        "group relative inline-block no-underline transition-colors duration-150",
        "text-foreground hover:text-foreground",
        // resting rule: always visible, muted
        "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-muted-foreground/50 after:content-['']",
        // hover rule: wipes left-to-right in currentColor over the resting one
        "before:absolute before:inset-x-0 before:-bottom-1 before:h-px before:origin-left before:scale-x-0 before:bg-current before:transition-transform before:duration-[350ms] before:ease-[cubic-bezier(0.16,1,0.3,1)] before:content-['']",
        "hover:before:scale-x-100 focus-visible:before:scale-x-100",
        // focus ring per the source spec: 2px outline, generous offset
        "focus-visible:outline-2 focus-visible:outline-offset-[7px] focus-visible:outline-ring",
        "motion-reduce:before:transition-none",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { LinkUnderline }
