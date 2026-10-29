import { Container, Reveal, Section } from "@farnazshahriari/design-system"

/**
 * Three recipes and only three. Reveal animates when it scrolls into view and
 * stays there (`once`), so what a still frame should show is the settled end
 * state — which is what these stories are photographed in.
 */
export const Variants = () => (
  <Section rhythm="sm">
    <Container>
      <div className="flex flex-col gap-6">
        {(["fade", "rise", "rise-fade"] as const).map((variant) => (
          <Reveal key={variant} variant={variant}>
            <div className="border-t border-border pt-4">
              <p className="text-label text-muted-foreground">variant = {variant}</p>
              <p className="mt-2 text-h3">
                Six hundred screens became eleven
              </p>
              <p className="mt-2 text-body text-muted-foreground">
                Opacity settles in 0.9s, position in 1.2s, both on the brand
                curve — the element arrives before it stops moving.
              </p>
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
      <Reveal>
        <p className="text-h2">
          I design systems that survive the second year.
        </p>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-6 text-lead text-muted-foreground">
          Twelve years of product design, most of it in banking, logistics and
          public services. Northwind, Meridian and Atlas are all still running.
        </p>
      </Reveal>
    </Container>
  </Section>
)

/**
 * `delay` is how a small group arrives as one gesture. Keep the step short —
 * three facts at 0.08s apart still read as a single movement.
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
          <Reveal key={fact.label} variant="rise-fade" delay={fact.delay}>
            <div className="border-t border-border pt-4">
              <p className="text-label text-muted-foreground">{fact.label}</p>
              <p className="mt-1 text-h4">{fact.value}</p>
              <p className="mt-1 text-meta text-muted-foreground">
                delay = {fact.delay}s
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
)
