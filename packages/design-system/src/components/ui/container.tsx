import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

/**
 * The one container primitive. Nothing else in the system defines its own
 * horizontal insets — if a layout needs different margins, it needs a
 * different container variant here, not a one-off.
 *
 * The source material steps its margins across seven breakpoints. This is
 * the same shape reduced to three, which is the most a system can hold in
 * its head: 24px, 40px from tablet, then a centred band on large screens.
 */
const containerVariants = cva("mx-auto w-full px-6 md:px-10", {
  variants: {
    width: {
      /** Standard page width. */
      default: "max-w-[1400px]",
      /** Reading width — long-form copy, where measure matters more than space. */
      narrow: "max-w-[52rem]",
      /** Edge-to-edge within the insets, for wide media compositions. */
      wide: "max-w-none",
    },
  },
  defaultVariants: { width: "default" },
})

function Container({
  className,
  width,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ width }), className)}
      {...props}
    />
  )
}

export { Container, containerVariants }
