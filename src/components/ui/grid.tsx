import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * The 12-column grid, with a 16px gutter.
 *
 * This only establishes the column context; children place themselves with
 * Tailwind's `col-span-*` utilities. That is deliberate — span props would
 * mean either enumerating every responsive combination as a class or
 * generating class names at runtime, and Tailwind can do neither safely.
 * Writing `col-span-12 md:col-span-6` on the child is clearer anyway.
 *
 *   <Grid>
 *     <div className="col-span-12 md:col-span-7">…</div>
 *     <div className="col-span-12 md:col-span-5">…</div>
 *   </Grid>
 *
 * Most pages never need this. Container plus a flex or a simple two-column
 * grid covers the majority; reach for the 12-column grid when a layout has
 * to line up with something else on the page.
 */
function Grid({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="grid"
      className={cn("grid grid-cols-12 gap-4", className)}
      {...props}
    />
  )
}

export { Grid }
