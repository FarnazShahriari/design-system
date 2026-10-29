import type { ReactNode } from "react"
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

/**
 * A four-project listing is taller than the capture frame, so the two
 * composition stories are shown on a 1120px page scaled to fit. The geometry
 * is inline because it is preview rigging, not design-system styling.
 */
const PageFrame = ({
  height,
  scale,
  children,
}: {
  height: number
  scale: number
  children: ReactNode
}) => (
  <div className="overflow-hidden bg-background" style={{ height }}>
    <div
      style={{
        width: 1120,
        transform: `scale(${scale})`,
        transformOrigin: "top left",
      }}
    >
      {children}
    </div>
  </div>
)

/** The work listing: two columns, the whole card one link, no buttons anywhere. */
export const Work = () => (
  <PageFrame height={560} scale={0.62}>
    <Section rhythm="sm">
      <Container>
        <ProjectGrid>
          {WORK.map((p) => (
            <ProjectCard key={p.href} {...p} ratio="16 / 9" />
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  </PageFrame>
)

/**
 * `stagger` drops the second column, so the grid drifts rather than marching
 * in rows. It is off by default: it reads beautifully with eight considered
 * projects and badly with three.
 */
export const Staggered = () => (
  <PageFrame height={600} scale={0.56}>
    <Section rhythm="sm">
      <Container>
        <ProjectGrid stagger>
          {WORK.map((p) => (
            <ProjectCard key={p.href} {...p} ratio="16 / 9" />
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  </PageFrame>
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
