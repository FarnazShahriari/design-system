import Link from "next/link"

import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"
import { ProjectCard, ProjectGrid } from "@farnazshahriari/design-system/patterns/project-grid"
import { PROJECTS } from "../projects"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"

export const metadata = { title: "Work index archetype" }

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
                href={`/preview/case-study/${p.slug}`}
                title={p.title}
                description={p.description}
                tags={p.tags}
                transitionName={projectTitleTransition(p.slug)}
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
