import Link from "next/link"

import { ProjectCard, ProjectGrid } from "@/components/patterns/project-grid"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export const metadata = { title: "Work index archetype" }

const PROJECTS = [
  { slug: "northwind", title: "Northwind", description: "Retail banking, rebuilt around two daily tasks", tags: ["Product design", "iOS"] },
  { slug: "meridian", title: "Meridian", description: "An identity for a logistics company that moves quietly", tags: ["Branding"] },
  { slug: "atlas", title: "Atlas", description: "A public-sector service that explains itself", tags: ["Websites", "Content"] },
  { slug: "corvid", title: "Corvid", description: "Field research tooling for ecologists", tags: ["Product design"] },
  { slug: "harbour", title: "Harbour", description: "A marketplace for small boat builders", tags: ["Websites"] },
  { slug: "stellar", title: "Stellar", description: "Observatory booking, from spreadsheet to service", tags: ["Product design", "Branding"] },
]

const FILTERS = [
  { label: "All work", count: 6, active: true },
  { label: "Product design", count: 3, active: false },
  { label: "Websites", count: 2, active: false },
  { label: "Branding", count: 2, active: false },
]

export default function WorkIndexArchetype() {
  return (
    <main>
      {/* Hero: one ambitious statement on the left, the filter list on the
          right. The active filter is marked with a dot, not a colour. */}
      <Section theme="light" rhythm="lg">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
            <h1 className="max-w-[16ch] text-display">
              Work we can show you.
            </h1>
            <ul className="flex list-none flex-col gap-2 p-0 md:min-w-52">
              {FILTERS.map((f) => (
                <li key={f.label}>
                  <Link
                    href="/preview/work-index"
                    className={`flex items-baseline gap-2 text-sm transition-colors ${
                      f.active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`size-1.5 shrink-0 translate-y-[-2px] rounded-pill ${
                        f.active ? "bg-foreground" : "bg-transparent"
                      }`}
                    />
                    {f.label}
                    <sup className="text-meta text-muted-foreground">{f.count}</sup>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* The staggered grid. The very large bottom padding is what makes the
          footer read as a separate chapter. */}
      <Section theme="light" rhythm="none" className="pb-24 xl:pb-48">
        <Container>
          <ProjectGrid stagger>
            {PROJECTS.map((p) => (
              <ProjectCard
                key={p.slug}
                href="/preview/case-study"
                title={p.title}
                description={p.description}
                tags={p.tags}
              />
            ))}
          </ProjectGrid>
        </Container>
      </Section>

      <Section theme="dark" rhythm="sm">
        <Container>
          <p className="text-h3">Let&rsquo;s talk</p>
        </Container>
      </Section>
    </main>
  )
}
