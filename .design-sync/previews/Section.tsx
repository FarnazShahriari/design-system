import { Button, Container, Section } from "@farnazshahriari/design-system"

/**
 * The important idea in the whole layout layer: the theme re-declares the
 * colour tokens for everything inside the section, so identical markup
 * inverts on its own. No component takes an `onDark` prop.
 */
export const Themes = () => (
  <div>
    {(["light", "muted", "dark"] as const).map((theme) => (
      <Section key={theme} theme={theme} rhythm="sm">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-h4">Section theme: {theme}</p>
              <p className="text-body text-muted-foreground">
                Same components, no props changed.
              </p>
            </div>
            <Button>A button</Button>
          </div>
        </Container>
      </Section>
    ))}
  </div>
)

/**
 * The one bold ground. A page gets a single black block, carrying the
 * statement that matters.
 */
export const TheBoldBlock = () => (
  <Section theme="dark" rhythm="lg">
    <Container>
      <p className="text-h2 max-w-[22ch]">
        Six hundred screens became eleven, and the support queue halved.
      </p>
    </Container>
  </Section>
)

/** Vertical rhythm steps 40 / 64 / 80px. */
export const Rhythm = () => (
  <div>
    {(["sm", "default", "lg"] as const).map((rhythm) => (
      <Section key={rhythm} theme={rhythm === "default" ? "muted" : "light"} rhythm={rhythm}>
        <Container>
          <p className="text-label text-muted-foreground">rhythm = {rhythm}</p>
        </Container>
      </Section>
    ))}
  </div>
)
