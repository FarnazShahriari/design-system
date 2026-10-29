import { Container, ProjectCard, ProjectGrid, Section } from "@farnazshahriari/design-system"

const WORK = [
  {
    href: "/work/northwind",
    title: "Northwind",
    description: "A current account that explains itself",
    tags: ["Retail banking", "2026"],
  },
  {
    href: "/work/meridian",
    title: "Meridian",
    description: "Eleven screens instead of six hundred",
    tags: ["Logistics", "2025"],
  },
  {
    href: "/work/atlas",
    title: "Atlas",
    description: "Casework without a case number",
    tags: ["Public sector", "2025"],
  },
  {
    href: "/work/harbour",
    title: "Harbour",
    description: "A booking flow that survives a bad signal",
    tags: ["Travel", "2024"],
  },
]

/** The work listing: two columns, whole card one link, no buttons. */
export const Work = () => (
  <Section rhythm="sm">
    <Container>
      <p className="text-label text-muted-foreground">Selected work</p>
      <ProjectGrid className="mt-6">
        {WORK.map((p) => (
          <ProjectCard key={p.href} {...p} />
        ))}
      </ProjectGrid>
    </Container>
  </Section>
)

/**
 * `stagger` drops the second column, so the grid drifts rather than marching
 * in rows. It wants eight considered projects; with three it reads as an
 * accident.
 */
export const Staggered = () => (
  <Section rhythm="sm">
    <Container>
      <ProjectGrid stagger>
        {WORK.map((p) => (
          <ProjectCard key={p.href} {...p} ratio="4 / 3" />
        ))}
      </ProjectGrid>
    </Container>
  </Section>
)

/** On the bold ground nothing changes: the tokens invert, the grid does not. */
export const OnDark = () => (
  <Section theme="dark" rhythm="sm">
    <Container>
      <p className="text-label text-muted-foreground">Archive</p>
      <ProjectGrid className="mt-6">
        {WORK.slice(0, 2).map((p) => (
          <ProjectCard key={p.href} {...p} ratio="16 / 9" />
        ))}
      </ProjectGrid>
    </Container>
  </Section>
)
