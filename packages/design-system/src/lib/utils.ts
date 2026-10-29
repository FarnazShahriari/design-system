import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * tailwind-merge has no idea what this system's type roles are. It sees
 * `text-h2`, fails to match it against a known font size, and files it under
 * *text colour* instead. So any colour utility later in the same call silently
 * deletes it:
 *
 *   cn("text-h2", "text-muted-foreground")  ->  "text-muted-foreground"
 *
 * No error, no warning — the heading just renders at the inherited size, which
 * looks like a design mistake rather than a bug. Every component in the library
 * pipes className through cn(), so this reached all of them.
 *
 * Registering the roles as font-size classes restores what you would expect: a
 * type role and a colour coexist, and two type roles collapse to the last one.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display",
            "h1",
            "h2",
            "h3",
            "h4",
            "lead",
            "body",
            "meta",
            "label",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
