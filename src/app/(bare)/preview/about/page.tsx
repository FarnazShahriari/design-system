import { Container } from "@/components/ui/container"
import { LinkUnderline } from "@/components/ui/link-underline"
import { Section } from "@/components/ui/section"

export const metadata = { title: "Content page archetype" }

export default function ContentArchetype() {
  return (
    <main>
      {/* The long-form archetype: one narrow column the whole way down.
          Measure is doing the work here, not layout. */}
      <Section theme="light" rhythm="lg">
        <Container width="narrow">
          <h1 className="text-h1">About</h1>
          <p className="mt-6 text-lead text-muted-foreground">
            We are a small studio that designs digital products and the systems
            that keep them coherent.
          </p>
        </Container>
      </Section>

      <Section theme="light" rhythm="none">
        <Container width="narrow">
          <div className="flex flex-col gap-6">
            <p>
              Most of our work starts after something has already been built.
              A product has grown past the decisions it was founded on, and the
              team can feel it in every new feature that takes longer than the
              last one.
            </p>
            <p>
              We are useful at that point because we treat the system and the
              surface as one problem. A component library that nobody enjoys
              using is not a design system; it is a tax.
            </p>

            <h2 className="mt-6 text-h3">How we work</h2>
            <p>
              We work in small teams, directly with the people who will own the
              result. There is no account layer, and no handover document that
              tries to substitute for having been in the room.
            </p>

            <h2 className="mt-6 text-h3">Getting in touch</h2>
            <p className="text-muted-foreground">
              We take on a handful of projects a year, and we are usually
              booking two to three months out.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-meta text-muted-foreground">Become a client</span>
                <LinkUnderline href="/preview/work-index" className="w-fit">
                  hello@example.com
                </LinkUnderline>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-meta text-muted-foreground">Join us</span>
                <LinkUnderline href="/preview/work-index" className="w-fit">
                  See open positions
                </LinkUnderline>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section theme="muted" rhythm="default" className="mt-16 xl:mt-24">
        <Container width="narrow">
          <p className="text-h3">Let&rsquo;s talk</p>
        </Container>
      </Section>
    </main>
  )
}
