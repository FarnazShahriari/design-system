import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

/**
 * A block of nothing, matching the section rhythm.
 *
 * Its only job is to let two same-coloured sections breathe without
 * doubling their padding. It is not a rule and it draws nothing — if you
 * want a visible line, that is a Separator, which is a different idea.
 */
const dividerVariants = cva("w-full bg-background", {
  variants: {
    theme: {
      light: "",
      muted: "",
      /** The one bold ground — see Section. There is no accent band. */
      dark: "",
      inherit: "",
    },
    size: {
      sm: "h-8 md:h-10 xl:h-12",
      default: "h-10 md:h-16 xl:h-20",
      lg: "h-16 md:h-24 xl:h-32",
    },
  },
  defaultVariants: { theme: "inherit", size: "default" },
})

function Divider({
  className,
  theme = "inherit",
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof dividerVariants>) {
  return (
    <div
      data-slot="divider"
      aria-hidden="true"
      data-section={theme === "inherit" ? undefined : theme}
      className={cn(dividerVariants({ theme, size }), className)}
      {...props}
    />
  )
}

export { Divider, dividerVariants }
