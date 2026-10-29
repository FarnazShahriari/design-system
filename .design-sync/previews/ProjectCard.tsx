import { Container, ProjectCard, ProjectGrid, Section } from "@farnazshahriari/design-system"

/**
 * ProjectCard is one <li> of the work listing, so every story shows it in its
 * real parent, ProjectGrid. The grid's own behaviour — the stagger, a full
 * listing — belongs to the ProjectGrid card.
 */
export const Card = () => (
  <Section rhythm="sm">
    <Container>
      <ProjectGrid>
        <ProjectCard
          href="/work/northwind"
          title="Northwind"
          description="A current account that explains itself"
          tags={["Retail banking", "2026"]}
        />
        <ProjectCard
          href="/work/meridian"
          title="Meridian"
          description="Eleven screens instead of six hundred"
          tags={["Logistics", "2025"]}
        />
      </ProjectGrid>
    </Container>
  </Section>
)

/**
 * With real media. No border and no shadow — the media frame is the card, and
 * the locked aspect ratio means nothing reflows once it loads.
 */
export const WithMedia = () => (
  <Section rhythm="sm">
    <Container>
      <ProjectGrid>
        <ProjectCard
          href="/work/meridian"
          title="Meridian"
          description="One queue, one detail view"
          tags={["Logistics", "2025"]}
          ratio="16 / 9"
          media={
            <div className="flex h-full items-end bg-foreground p-6">
              <p className="text-h4 text-background">4,000 shipments a day</p>
            </div>
          }
        />
        <ProjectCard
          href="/work/atlas"
          title="Atlas"
          description="Casework without a case number"
          tags={["Public sector", "2025"]}
          ratio="16 / 9"
          media={
            <div className="flex h-full items-end bg-muted p-6">
              <p className="text-h4 text-muted-foreground">Eleven forms, one path</p>
            </div>
          }
        />
      </ProjectGrid>
    </Container>
  </Section>
)

/**
 * The ratio is per card, so a portrait study can sit beside a landscape one
 * without either being cropped to fit the grid.
 */
export const Ratios = () => (
  <Section theme="muted" rhythm="sm">
    <Container>
      <ProjectGrid>
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
      </ProjectGrid>
    </Container>
  </Section>
)

/**
 * `transitionName` pairs the title with the same-named title on the project
 * page, so the word travels into place instead of being replaced. The card
 * beside it has no name and cross-fades as usual.
 */
export const SharedTitle = () => (
  <Section rhythm="sm">
    <Container>
      <ProjectGrid>
        <ProjectCard
          href="/work/atlas"
          title="Atlas"
          description="Shared title — the word morphs across the navigation"
          tags={["Public sector", "2025"]}
          transitionName="project-title-atlas"
        />
        <ProjectCard
          href="/work/harbour"
          title="Harbour"
          description="No shared title — the page cross-fades"
          tags={["Travel", "2024"]}
        />
      </ProjectGrid>
    </Container>
  </Section>
)
