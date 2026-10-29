import { Container, Grid, Section } from "@farnazshahriari/design-system"

/**
 * Twelve columns, 16px gutter. Each block is one column — muted blocks on the
 * paper ground, because inside a themed section `bg-background` IS that
 * section's ground and would disappear.
 */
export const TwelveColumns = () => (
  <Section rhythm="sm">
    <Container>
      <p className="text-label text-muted-foreground">12 columns · 16px gutter</p>
      <Grid className="mt-4">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="col-span-1 flex h-16 items-end justify-center bg-muted pb-3 text-meta text-muted-foreground"
          >
            {i + 1}
          </div>
        ))}
      </Grid>
    </Container>
  </Section>
)

/**
 * The editorial split: the argument on seven columns, the facts on five.
 * Children place themselves — the grid only supplies the columns.
 */
export const SevenFive = () => (
  <Section rhythm="sm">
    <Container>
      <Grid>
        <div className="col-span-12 md:col-span-7">
          <p className="text-label text-muted-foreground">
            Northwind · Retail banking, 2026
          </p>
          <h2 className="mt-2 text-h2">A current account that explains itself</h2>
          <p className="mt-4 text-body text-muted-foreground">
            Six hundred screens became eleven, and the support queue halved. The
            work was mostly subtraction: one account model, one place to watch
            money move, and a statement anyone can read aloud.
          </p>
        </div>
        <div className="col-span-12 flex flex-col gap-4 border-t border-border pt-4 md:col-span-5">
          <div>
            <p className="text-label text-muted-foreground">Role</p>
            <p className="text-body">Lead product designer</p>
          </div>
          <div>
            <p className="text-label text-muted-foreground">Team</p>
            <p className="text-body">Two designers, six engineers</p>
          </div>
          <div>
            <p className="text-label text-muted-foreground">Shipped</p>
            <p className="text-body">March 2026</p>
          </div>
        </div>
      </Grid>
    </Container>
  </Section>
)

/** Six and six — the before-and-after pair, lined up on the same columns. */
export const HalfAndHalf = () => (
  <Section theme="muted" rhythm="sm">
    <Container>
      <Grid>
        <div className="col-span-12 border-t border-border pt-4 md:col-span-6">
          <p className="text-label text-muted-foreground">Before · 2024</p>
          <p className="mt-2 text-h3">Nine tools to move one shipment</p>
          <p className="mt-2 text-body text-muted-foreground">
            A dispatcher opened three consoles and a spreadsheet to answer one
            question from a driver.
          </p>
        </div>
        <div className="col-span-12 border-t border-border pt-4 md:col-span-6">
          <p className="text-label text-muted-foreground">After · Meridian, 2025</p>
          <p className="mt-2 text-h3">One queue, one detail view</p>
          <p className="mt-2 text-body text-muted-foreground">
            The same question is answered without leaving the queue, and the
            exception path is entirely keyboard.
          </p>
        </div>
      </Grid>
    </Container>
  </Section>
)
