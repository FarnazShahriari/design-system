/** Shared content for the archetype pages, so the two sides of a morph agree. */
export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  lead: string
  services: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: "northwind",
    title: "Northwind",
    description: "Retail banking, rebuilt around two daily tasks",
    tags: ["Product design", "iOS"],
    lead: "A retail bank rebuilt around the two things its customers actually do every day.",
    services: ["Product strategy", "Interface design", "Design system", "iOS & Android"],
  },
  {
    slug: "meridian",
    title: "Meridian",
    description: "An identity for a logistics company that moves quietly",
    tags: ["Branding"],
    lead: "An identity for a logistics company whose whole promise is that you never think about it.",
    services: ["Brand strategy", "Identity", "Motion", "Guidelines"],
  },
  {
    slug: "atlas",
    title: "Atlas",
    description: "A public-sector service that explains itself",
    tags: ["Websites", "Content"],
    lead: "A public service redesigned so that reading it once is enough.",
    services: ["Content design", "Information architecture", "Accessibility"],
  },
  {
    slug: "corvid",
    title: "Corvid",
    description: "Field research tooling for ecologists",
    tags: ["Product design"],
    lead: "Field tooling for ecologists who are usually cold, often offline, and never at a desk.",
    services: ["Research", "Product design", "Design system"],
  },
  {
    slug: "harbour",
    title: "Harbour",
    description: "A marketplace for small boat builders",
    tags: ["Websites"],
    lead: "A marketplace for a trade that had always worked on reputation and phone calls.",
    services: ["Product design", "Websites"],
  },
  {
    slug: "stellar",
    title: "Stellar",
    description: "Observatory booking, from spreadsheet to service",
    tags: ["Product design", "Branding"],
    lead: "Telescope time, booked in a minute instead of a fortnight of email.",
    services: ["Product design", "Identity", "Design system"],
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

export function nextProject(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug)
  return PROJECTS[(i + 1) % PROJECTS.length]
}
