import { Checkbox, Label } from "@farnazshahriari/design-system"

/** The real job: a labelled list of disciplines, two of them already chosen. */
export const DisciplineList = () => (
  <fieldset className="flex w-80 flex-col gap-3">
    <legend className="text-label mb-1 text-muted-foreground">
      What do you need?
    </legend>
    {[
      { id: "cb-service", label: "Service design", on: true },
      { id: "cb-product", label: "Digital product", on: true },
      { id: "cb-brand", label: "Brand", on: false },
      { id: "cb-research", label: "Research and discovery", on: false },
    ].map((o) => (
      <div key={o.id} className="flex items-center gap-3">
        <Checkbox id={o.id} defaultChecked={o.on} />
        <Label htmlFor={o.id}>
          {o.label}
        </Label>
      </div>
    ))}
    <p className="text-meta text-muted-foreground">Choose as many as apply.</p>
  </fieldset>
)

/** Each row can carry its own line of detail, aligned under the label. */
export const WithDescriptions = () => (
  <div className="flex w-96 flex-col gap-4">
    <div className="flex gap-3">
      <Checkbox id="cb-audit" defaultChecked className="mt-1" />
      <div className="flex flex-col gap-1">
        <Label htmlFor="cb-audit">
          Journey audit
        </Label>
        <p className="text-meta text-muted-foreground">
          Two weeks, end-to-end map and a prioritised list of fixes.
        </p>
      </div>
    </div>
    <div className="flex gap-3">
      <Checkbox id="cb-build" className="mt-1" />
      <div className="flex flex-col gap-1">
        <Label htmlFor="cb-build">
          Design and build
        </Label>
        <p className="text-meta text-muted-foreground">
          Eight to twelve weeks alongside your engineering team.
        </p>
      </div>
    </div>
  </div>
)

/** Every state that renders without a pointer. */
export const States = () => (
  <div className="flex w-80 flex-col gap-4">
    <div className="flex items-center gap-3">
      <Checkbox id="cb-s1" />
      <Label htmlFor="cb-s1">
        Unchecked
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Checkbox id="cb-s2" defaultChecked />
      <Label htmlFor="cb-s2">
        Checked
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Checkbox id="cb-s3" disabled />
      <Label htmlFor="cb-s3">
        Disabled
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Checkbox id="cb-s4" disabled defaultChecked />
      <Label htmlFor="cb-s4">
        Disabled and checked
      </Label>
    </div>
  </div>
)

/** Consent, unticked and invalid — the one checkbox a form may insist on. */
export const Consent = () => (
  <div className="flex w-96 flex-col gap-2">
    <div className="flex gap-3">
      <Checkbox id="cb-consent" aria-invalid className="mt-1" />
      <Label htmlFor="cb-consent" className="items-start">
        I agree the studio may keep this brief on file to reply to the enquiry.
      </Label>
    </div>
    <p className="text-meta pl-7 text-destructive">
      Required before the brief can be sent.
    </p>
  </div>
)
