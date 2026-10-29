import { Container, ProjectCard, Section } from "@farnazshahriari/design-system"

/**
 * ProjectCard is an <li>, so every story below sits in a list. The cards are
 * shown one and two up here; the stagger and the full work listing belong to
 * ProjectGrid.
 */
export const Card = () => (
  <Section rhythm="sm">
    <Container>
      <ul className="grid list-none grid-cols-1 gap-10 p-0">
        <ProjectCard
          href="/work/northwind"
          title="Northwind"
          description="A current account that explains itself"
          tags={["Retail banking", "2026"]}
        />
      </ul>
    </Container>
  </Section>
)

/**
 * With real media. There is no border and no shadow — the media frame is the
 * card, and the locked aspect ratio means nothing reflows when it loads.
 */
export const WithMedia = () => (
  <Section rhythm="sm">
    <Container>
      <ul className="grid list-none grid-cols-1 gap-10 p-0">
        <ProjectCard
          href="/work/meridian"
          title="Meridian"
          description="Eleven screens instead of six hundred"
          tags={["Logistics", "2025"]}
          ratio="16 / 9"
          media={
            <div className="flex h-full items-end bg-foreground p-6">
              <p className="text-h3 text-background">
                One queue, one detail view
              </p>
            </div>
          }
        />
      </ul>
    </Container>
  </Section>
)

/**
 * The ratio is per card, so a portrait study can sit beside a landscape one
 * without either being cropped by the grid.
 */
export const Ratios = () => (
  <Section theme="muted" rhythm="sm">
    <Container>
      <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2">
        <ProjectCard
          href="/work/atlas"
          title="Atlas"
          description="Casework without a case number"
          tags={["Public sector", "2025"]}
          ratio="4 / 3"
        />
        <ProjectCard
          href="/work/northwind"
          title="Northwind"
          description="A statement anyone can read aloud"
          tags={["Retail banking", "2026"]}
          ratio="3 / 4"
        />
      </ul>
    </Container>
  </Section>
)

/**
 * `transitionName` pairs the title with the same-named title on the project
 * page, so the word travels into place instead of being replaced.
 */
export const SharedTitle = () => (
  <Section rhythm="sm">
    <Container>
      <ul className="grid list-none grid-cols-1 gap-10 p-0">
        <ProjectCard
          href="/work/atlas"
          title="Atlas"
          description="Casework without a case number"
          tags={["Public sector", "2025"]}
          transitionName="project-title-atlas"
        />
      </ul>
    </Container>
  </Section>
)
