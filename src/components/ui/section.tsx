import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * A page is a stack of Sections. Each one owns two things: the ground it
 * sits on, and its vertical rhythm.
 *
 * The theme is applied as a data attribute that re-declares the colour
 * tokens for the subtree (see the SECTION THEMES block in globals.css), so
 * a Button, a caption or a border inside a dark section inverts on its own.
 * No component takes an "onDark" prop, and none ever should.
 *
 * The rhythm steps 40 -> 64 -> 80px, the spacing ladder's section value.
 */
const sectionVariants = cva("w-full bg-background text-foreground", {
  variants: {
    theme: {
      light: "",
      muted: "",
      dark: "",
      accent: "",
      /** Inherit the page's current theme instead of declaring one. */
      inherit: "",
    },
    rhythm: {
      none: "py-0",
      sm: "py-8 md:py-10 xl:py-12",
      default: "py-10 md:py-16 xl:py-20",
      lg: "py-16 md:py-24 xl:py-32",
    },
  },
  defaultVariants: { theme: "inherit", rhythm: "default" },
})

function Section({
  className,
  theme = "inherit",
  rhythm,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      data-slot="section"
      // "inherit" deliberately sets no attribute, so the subtree keeps
      // whatever tokens the page (or an enclosing section) already set.
      data-section={theme === "inherit" ? undefined : theme}
      className={cn(sectionVariants({ theme, rhythm }), className)}
      {...props}
    />
  )
}

export { Section, sectionVariants }
