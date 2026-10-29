import { Container, Reveal, Section } from "@farnazshahriari/design-system"

/**
 * Reveal animates from hidden to shown when it scrolls into view, and stays
 * there (`once`). A still frame has to photograph the END state, so every
 * story below starts at `initial="shown"` — the variants, durations and
 * curve are the component's own; only the starting frame is pinned.
 */
/** Three recipes and only three: a fade, a rise, and both together. */
export const Variants = () => (
  <Section rhythm="sm">
    <Container>
      <div className="flex flex-col gap-6">
        {(
          [
            ["fade", "Opacity only — for something already in position."],
            ["rise", "Position only — 16px, a settle rather than an entrance."],
            ["rise-fade", "Both, and the position settles slower than the fade."],
          ] as const
        ).map(([variant, note]) => (
          <Reveal key={variant} variant={variant} initial="shown">
            <div className="flex flex-col gap-2 border-t border-border pt-4">
              <p className="text-label text-muted-foreground">variant = {variant}</p>
              <p className="text-h3">Six hundred screens became eleven</p>
              <p className="text-body text-muted-foreground">{note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
)

/** A page entrance: the statement settles first, the supporting line after it. */
export const PageEntrance = () => (
  <Section theme="dark" rhythm="default">
    <Container width="narrow">
      <div className="flex flex-col gap-6">
        <Reveal initial="shown">
          <p className="text-h2">I design systems that survive the second year.</p>
        </Reveal>
        <Reveal delay={0.12} initial="shown">
          <p className="text-lead text-muted-foreground">
            Twelve years of product design, most of it in banking, logistics and
            public services. Northwind, Meridian and Atlas are all still running.
          </p>
        </Reveal>
      </div>
    </Container>
  </Section>
)

/**
 * `delay` is how a small group arrives as one gesture. Keep the step short —
 * three facts 0.08s apart still read as a single movement.
 */
export const Delays = () => (
  <Section theme="muted" rhythm="sm">
    <Container>
      <div className="flex flex-col gap-4">
        {[
          { label: "Sector", value: "Retail banking", delay: 0 },
          { label: "Year", value: "2026", delay: 0.08 },
          { label: "Engagement", value: "Nine months", delay: 0.16 },
        ].map((fact) => (
          <Reveal key={fact.label} variant="rise-fade" delay={fact.delay} initial="shown">
            <div className="flex flex-col gap-1 border-t border-border pt-4">
              <p className="text-label text-muted-foreground">{fact.label}</p>
              <p className="text-h4">{fact.value}</p>
              <p className="text-meta text-muted-foreground">delay = {fact.delay}s</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
)
