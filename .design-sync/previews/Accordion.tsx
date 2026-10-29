import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@farnazshahriari/design-system"

/**
 * One panel at a time, and `collapsible` lets the open one close again.
 * `defaultValue` is what makes the first answer visible in a static shot.
 */
export const FAQ = () => (
  <Accordion
    type="single"
    collapsible
    defaultValue="scope"
    className="max-w-[60ch]"
  >
    <AccordionItem value="scope">
      <AccordionTrigger>What does a typical engagement cover?</AccordionTrigger>
      <AccordionContent>
        Research, service design and the interface work that follows from it.
        Northwind ran twelve weeks; Meridian ran twenty, including handover to
        an in-house team.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="research">
      <AccordionTrigger>Is research always part of it?</AccordionTrigger>
      <AccordionContent>
        Yes. On Meridian nothing was designed before the third week — twelve
        ride-alongs decided the information order first.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="systems">
      <AccordionTrigger>Do you hand over a design system?</AccordionTrigger>
      <AccordionContent>
        When the team will keep building, yes. Atlas shipped with forty
        components, a token set and a written contribution process.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="availability">
      <AccordionTrigger>When are you next available?</AccordionTrigger>
      <AccordionContent>
        From March. Shorter reviews and design-system audits can usually start
        inside a fortnight.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

/** `type="multiple"` opens several at once; the array sets which. */
export const Multiple = () => (
  <Accordion
    type="multiple"
    defaultValue={["process", "tools"]}
    className="max-w-[60ch]"
  >
    <AccordionItem value="process">
      <AccordionTrigger>How the work is sequenced</AccordionTrigger>
      <AccordionContent>
        Discovery, then a service blueprint, then interface work. The blueprint
        is the artefact everything else is argued against.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="tools">
      <AccordionTrigger>What gets handed over</AccordionTrigger>
      <AccordionContent>
        Figma libraries, a token set as CSS custom properties, and the
        component source. No screenshots in the handover pack.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="measure">
      <AccordionTrigger>How outcomes are measured</AccordionTrigger>
      <AccordionContent>
        Agreed before the first sketch. Northwind was judged on completion rate
        and support volume, nothing else.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)
