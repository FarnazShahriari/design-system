import { ProjectCard, ProjectGrid } from "@/components/patterns/project-grid"
import { Container } from "@/components/ui/container"
import { Divider } from "@/components/ui/divider"
import { LinkUnderline } from "@/components/ui/link-underline"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import type { Entry } from "@/showcase/types"

/** Embeds a real archetype page at a real width, so it can be judged as a page. */
function PagePreview({ src, title, height = 620 }: { src: string; title: string; height?: number }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-md border">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="block w-full bg-background"
          style={{ height }}
        />
      </div>
      <LinkUnderline href={src} className="w-fit text-meta">
        Open {title} full width
      </LinkUnderline>
    </div>
  )
}

export const patterns: Entry[] = [
  {
    slug: "container",
    title: "Container",
    description:
      "The one container primitive. Nothing else in the system defines its own horizontal insets — if a layout needs different margins, it needs a variant here, not a one-off.",
    origin: "custom",
    originNote: "src/components/ui/container.tsx",
    examples: [
      {
        label: "Widths",
        note: "The source material steps its margins across seven breakpoints. This is the same shape at three, which is the most a system can hold in its head: 24px, 40px from tablet, then a centred band.",
        node: (
          <div className="flex flex-col gap-4">
            {[
              { w: "default" as const, label: "default — 1400px, standard page width" },
              { w: "narrow" as const, label: "narrow — reading width for long-form copy" },
              { w: "wide" as const, label: "wide — edge to edge inside the insets" },
            ].map((v) => (
              <div key={v.w} className="bg-muted py-3">
                <Container width={v.w}>
                  <div className="bg-accent px-4 py-3 text-meta text-accent-foreground">
                    {v.label}
                  </div>
                </Container>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    slug: "section",
    title: "Section",
    description:
      "A page is a stack of sections. Each owns two things: the ground it sits on, and its vertical rhythm. The theme re-declares the colour tokens for its subtree, so everything inside inverts on its own.",
    origin: "custom",
    originNote: "src/components/ui/section.tsx",
    examples: [
      {
        label: "Themes",
        note: "This is the important idea in the whole layout layer. No component takes an `onDark` prop — the button, the caption and the border below are the same components in all four bands, reading their tokens from whichever section encloses them.",
        node: (
          <div className="-mx-6 sm:-mx-8">
            {(["light", "muted", "dark", "accent"] as const).map((t) => (
              <Section key={t} theme={t} rhythm="sm">
                <Container>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-h4">Section theme: {t}</p>
                      <p className="text-meta text-muted-foreground">
                        Same components, no props changed.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <LinkUnderline href="/patterns/section">A link</LinkUnderline>
                      <Button size="sm" className="rounded-pill">
                        A button
                      </Button>
                    </div>
                  </div>
                </Container>
              </Section>
            ))}
          </div>
        ),
      },
      {
        label: "Rhythm",
        note: "Vertical space steps 40 / 64 / 80px — the section value from the spacing ladder. Four variants cover everything: none, sm, default, lg.",
        node: (
          <div className="-mx-6 sm:-mx-8">
            {(["sm", "default", "lg"] as const).map((r, i) => (
              <Section
                key={r}
                theme={i % 2 === 0 ? "muted" : "light"}
                rhythm={r}
              >
                <Container>
                  <p className="text-meta text-muted-foreground">rhythm=&ldquo;{r}&rdquo;</p>
                </Container>
              </Section>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    slug: "divider",
    title: "Divider",
    description:
      "A block of nothing, matching the section rhythm. Its only job is to let two same-coloured sections breathe without doubling their padding.",
    origin: "custom",
    originNote: "src/components/ui/divider.tsx — not to be confused with Separator, which draws a visible rule.",
    examples: [
      {
        label: "Two same-coloured sections",
        note: "Without the divider these two bands read as one. It draws nothing — if you want a visible line, that is a Separator, which is a different idea.",
        node: (
          <div className="-mx-6 sm:-mx-8">
            <Section theme="muted" rhythm="sm">
              <Container>
                <p className="text-meta text-muted-foreground">First band</p>
              </Container>
            </Section>
            <Divider theme="muted" size="sm" />
            <Section theme="muted" rhythm="sm">
              <Container>
                <p className="text-meta text-muted-foreground">Second band</p>
              </Container>
            </Section>
          </div>
        ),
      },
    ],
  },
  {
    slug: "project-grid",
    title: "Project grid",
    description:
      "The work-listing pattern: a grid where the whole card is one link. No button, no border, no shadow — the media does the work, and titles never wrap.",
    origin: "custom",
    originNote: "src/components/patterns/project-grid.tsx",
    examples: [
      {
        label: "Staggered",
        note: "The second column is offset downward so the grid drifts rather than marching in rows. Off by default: it reads beautifully with eight considered projects and badly with three.",
        node: (
          <ProjectGrid stagger>
            {[
              { t: "Northwind", d: "Retail banking, rebuilt around two daily tasks", g: ["Product design"] },
              { t: "Meridian", d: "An identity for a logistics company", g: ["Branding"] },
              { t: "Atlas", d: "A public-sector service that explains itself", g: ["Websites"] },
              { t: "Corvid", d: "Field research tooling for ecologists", g: ["Product design"] },
            ].map((p) => (
              <ProjectCard
                key={p.t}
                href="/preview/case-study"
                title={p.t}
                description={p.d}
                tags={p.g}
              />
            ))}
          </ProjectGrid>
        ),
      },
    ],
  },
  {
    slug: "page-archetypes",
    title: "Page archetypes",
    description:
      "Three layouts that cover most of what a portfolio needs. Each is a real page built only from the primitives above — open one and view source, there is no bespoke layout code in any of them.",
    origin: "custom",
    originNote: "src/app/(bare)/preview/*",
    examples: [
      {
        label: "Case study",
        note: "Hero, full-bleed media, an info block split 57.5/42.5, then alternating bands with a divider where two share a colour. Ends on the accent teaser — the reason the accent section theme exists.",
        node: <PagePreview src="/preview/case-study" title="the case study" height={640} />,
      },
      {
        label: "Work index",
        note: "One ambitious statement, a filter list marked with a dot rather than a colour, then the staggered grid. The oversized bottom padding is what makes the footer read as a separate chapter.",
        node: <PagePreview src="/preview/work-index" title="the work index" height={640} />,
      },
      {
        label: "Content page",
        note: "One narrow column the whole way down. Measure is doing the work here, not layout — this is the archetype for an about, a contact or a piece of writing.",
        node: <PagePreview src="/preview/about" title="the content page" height={560} />,
      },
    ],
  },
]
