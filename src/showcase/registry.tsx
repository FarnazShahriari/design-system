import { TokenPlayground } from "@/components/showcase/token-playground"
import { actions } from "@/showcase/entries/actions"
import { display } from "@/showcase/entries/display"
import { feedback } from "@/showcase/entries/feedback"
import { forms } from "@/showcase/entries/forms"
import { foundations } from "@/showcase/entries/foundations"
import { navigation } from "@/showcase/entries/navigation"
import { overlays } from "@/showcase/entries/overlays"
import { motionEntries } from "@/showcase/entries/motion"
import { patterns } from "@/showcase/entries/patterns"
import type { Entry, Section } from "@/showcase/types"

/**
 * The single source of truth for the showcase. Adding something to the
 * style guide means adding one entry here (or to one of the entry files) —
 * navigation, routing and static generation all derive from this.
 */
export const sections: Section[] = [
  {
    slug: "foundations",
    title: "Foundations",
    description:
      "The decisions everything else inherits: colour, type, spacing, shape and motion.",
    entries: foundations,
  },
  {
    slug: "components",
    title: "Components",
    description:
      "Every component in the system, grouped by what it does. Each one notes whether it is stock, modified, or written for this system.",
    entries: [...actions, ...forms, ...display, ...navigation, ...overlays, ...feedback],
  },
  {
    slug: "patterns",
    title: "Patterns",
    description:
      "How pages are built: one container, sections that own their ground, the layouts those compose into, and how it all moves.",
    entries: [...patterns, ...motionEntries],
  },
  {
    slug: "playground",
    title: "Playground",
    description: "Change tokens live and copy the result back into the theme.",
    entries: [
      {
        slug: "tokens",
        title: "Token playground",
        description:
          "Tune colours and radius against a live preview, then copy the CSS into src/app/globals.css. Nothing here is persisted — it is a sketchpad, not a settings panel.",
        origin: "custom",
        examples: [{ label: "Editor", node: <TokenPlayground /> }],
      },
    ],
  },
]

/** Plain, serializable nav data — safe to hand to a client component. */
export const navSections = sections.map((s) => ({
  slug: s.slug,
  title: s.title,
  entries: s.entries.map((e) => ({
    slug: e.slug,
    title: e.title,
    href: `/${s.slug}/${e.slug}`,
  })),
}))

export function findEntry(
  sectionSlug: string,
  entrySlug: string
): { section: Section; entry: Entry } | null {
  const section = sections.find((s) => s.slug === sectionSlug)
  const entry = section?.entries.find((e) => e.slug === entrySlug)
  return section && entry ? { section, entry } : null
}

export function allEntryParams() {
  return sections.flatMap((s) =>
    s.entries.map((e) => ({ slug: [s.slug, e.slug] }))
  )
}
