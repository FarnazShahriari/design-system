import { Container, Divider, Section } from "@farnazshahriari/design-system"

/**
 * Divider draws nothing. It is a block of empty ground at section rhythm, so
 * two same-coloured sections can breathe without doubling their padding —
 * a visible rule is Separator, which is a different idea entirely.
 */
export const BetweenSameGrounds = () => (
  <div>
    <Section theme="muted" rhythm="sm">
      <Container>
        <p className="text-label text-muted-foreground">Selected work</p>
        <p className="mt-2 text-h3">Northwind, Meridian, Atlas</p>
      </Container>
    </Section>
    <Divider theme="muted" />
    <Section theme="muted" rhythm="sm">
      <Container>
        <p className="text-label text-muted-foreground">Writing</p>
        <p className="mt-2 text-h3">Notes on designing less</p>
      </Container>
    </Section>
  </div>
)

/** The three sizes, read as the breathing room between two muted bands. */
export const Sizes = () => (
  <div className="flex flex-col gap-6">
    {(["sm", "default", "lg"] as const).map((size) => (
      <div key={size}>
        <Section theme="muted" rhythm="none" className="py-3">
          <Container>
            <p className="text-label text-muted-foreground">size = {size}</p>
          </Container>
        </Section>
        <Divider theme="muted" size={size} />
        <Section theme="muted" rhythm="none" className="py-3">
          <Container>
            <p className="text-meta text-muted-foreground">
              the muted gap above is the divider
            </p>
          </Container>
        </Section>
      </div>
    ))}
  </div>
)

/** On the bold ground the black has to stay continuous, so the divider takes the theme too. */
export const OnDark = () => (
  <div>
    <Section theme="dark" rhythm="sm">
      <Container>
        <p className="text-h3">Six hundred screens became eleven.</p>
      </Container>
    </Section>
    <Divider theme="dark" />
    <Section theme="dark" rhythm="sm">
      <Container>
        <p className="text-body text-muted-foreground">
          Northwind · Retail banking, 2026
        </p>
      </Container>
    </Section>
  </div>
)
