import type { ReactNode } from "react"

/** One rendered example within an entry. */
export type Example = {
  label: string
  /** Optional note explaining the rule or decision this example demonstrates. */
  note?: string
  node: ReactNode
}

export type Entry = {
  /** URL path after the section, e.g. "button" -> /components/button */
  slug: string
  title: string
  description: string
  /**
   * "restyled" = stock shadcn component, re-themed purely through tokens.
   * "modified" = we changed the component source itself (and why).
   * "custom"   = written by us; no shadcn equivalent exists.
   */
  origin?: "restyled" | "modified" | "custom"
  originNote?: string
  examples: Example[]
}

export type Section = {
  slug: string
  title: string
  description: string
  entries: Entry[]
}
