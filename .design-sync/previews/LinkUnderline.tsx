import { Container, LinkUnderline, Section } from "@farnazshahriari/design-system"

/**
 * The workhorse link. Two stacked rules sit under the label: a permanent
 * muted one, so colour is never the only affordance, and a currentColor rule
 * that wipes in from the left on hover.
 */
export const InSentence = () => (
  <Section rhythm="sm">
    <Container width="narrow">
      <p className="text-body">
        Northwind took six hundred screens down to eleven — the{" "}
        <LinkUnderline href="/work/northwind">full case study</LinkUnderline> has
        the account model and the numbers. For the shorter version, read{" "}
        <LinkUnderline href="/writing/designing-less">
          notes on designing less
        </LinkUnderline>
        .
      </p>
    </Container>
  </Section>
)

/** On the bold ground the resting rule picks up the inverted tokens on its own. */
export const OnDark = () => (
  <Section theme="dark" rhythm="sm">
    <Container width="narrow">
      <p className="text-lead">
        Meridian is still dispatching four thousand shipments a day. The{" "}
        <LinkUnderline href="/work/meridian">write-up</LinkUnderline> covers
        what we cut, and{" "}
        <LinkUnderline href="/about">who did the work</LinkUnderline>.
      </p>
    </Container>
  </Section>
)

/** Standalone, in a footer column. `asChild` carries an external anchor. */
export const AsList = () => (
  <Section theme="muted" rhythm="sm">
    <Container>
      <p className="text-label text-muted-foreground">Elsewhere</p>
      <div className="mt-4 flex flex-col items-start gap-4">
        <LinkUnderline href="/work">All work, 2014 to now</LinkUnderline>
        <LinkUnderline asChild>
          <a href="https://example.com/readings" rel="noreferrer">
            Reading list
          </a>
        </LinkUnderline>
        <LinkUnderline href="/contact">Start a project</LinkUnderline>
      </div>
    </Container>
  </Section>
)
