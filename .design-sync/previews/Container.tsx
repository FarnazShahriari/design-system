import type { ReactNode } from "react"
import { Container, Section } from "@farnazshahriari/design-system"

/**
 * The widths only separate above 832px, and the grading card is narrower
 * than that — so the three are shown on a 1700px page scaled to fit. The
 * geometry is inline because it is a preview rig, not design-system styling;
 * every colour and type role below is a token utility.
 */
const PageFrame = ({ children }: { children: ReactNode }) => (
  <div className="overflow-hidden" style={{ height: 120 }}>
    <div style={{ width: 1700, transform: "scale(0.5)", transformOrigin: "top left" }}>
      {children}
    </div>
  </div>
)

const Band = ({
  width,
  caption,
}: {
  width: "default" | "narrow" | "wide"
  caption: string
}) => (
  <div className="bg-muted py-10">
    <Container width={width}>
      <div className="border border-border bg-background p-8" style={{ height: 160 }}>
        <p className="text-h2">Northwind</p>
        <p className="mt-2 text-lead text-muted-foreground">{caption}</p>
      </div>
    </Container>
  </div>
)

/**
 * Three widths on one page. The muted ground is the page; the paper block is
 * the container's content, so what you are reading is the inset on either side.
 */
export const Widths = () => (
  <div className="flex flex-col gap-6 bg-background">
    <div className="flex flex-col gap-2">
      <p className="text-label text-muted-foreground">width = default · max 1400px</p>
      <PageFrame>
        <Band width="default" caption="Retail banking, 2026" />
      </PageFrame>
    </div>
    <div className="flex flex-col gap-2">
      <p className="text-label text-muted-foreground">width = narrow · max 52rem</p>
      <PageFrame>
        <Band width="narrow" caption="Reading measure" />
      </PageFrame>
    </div>
    <div className="flex flex-col gap-2">
      <p className="text-label text-muted-foreground">width = wide · no maximum</p>
      <PageFrame>
        <Band width="wide" caption="Wide media composition" />
      </PageFrame>
    </div>
  </div>
)

/**
 * The insets at true size: 24px on a phone, 40px from tablet up. Nothing else
 * in the system declares horizontal padding, which is why every section on a
 * page lines up without being asked to.
 */
export const Insets = () => (
  <Section rhythm="sm">
    <Container>
      <div className="border border-border bg-muted px-8 py-10">
        <p className="text-h3">Everything lines up on one inset</p>
        <p className="mt-2 text-body text-muted-foreground">
          The paper ground runs edge to edge. The block inside starts where
          the container&rsquo;s padding ends — 24px on a phone, 40px from tablet up.
        </p>
      </div>
    </Container>
  </Section>
)

/** The reading measure, carrying long-form case-study copy. */
export const NarrowForReading = () => (
  <Section rhythm="sm">
    <Container width="narrow">
      <p className="text-label text-muted-foreground">Meridian · Logistics, 2025</p>
      <h2 className="mt-2 text-h2">Eleven screens instead of six hundred</h2>
      <p className="mt-4 text-lead">
        Dispatchers were running the network from a spreadsheet and three
        separate consoles. We rebuilt the day around a single queue.
      </p>
      <p className="mt-4 text-body text-muted-foreground">
        The first week of research produced one number worth designing against:
        a dispatcher touched nine tools to move one shipment. Everything that
        followed — the queue, the single detail view, the keyboard path through
        an exception — came out of cutting that number down rather than out of a
        visual refresh. The measure here is deliberate: around seventy
        characters a line, so a long argument stays readable to the end.
      </p>
    </Container>
  </Section>
)
