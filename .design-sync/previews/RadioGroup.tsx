import { Label, RadioGroup, RadioGroupItem } from "@farnazshahriari/design-system"

/** The parent composition — leaf items only exist inside it. */
export const Discipline = () => (
  <fieldset className="w-80">
    <legend className="text-label mb-3 text-muted-foreground">
      Primary discipline
    </legend>
    <RadioGroup defaultValue="service">
      {[
        { v: "service", label: "Service design" },
        { v: "product", label: "Digital product" },
        { v: "brand", label: "Brand" },
      ].map((o) => (
        <div key={o.v} className="flex items-center gap-3">
          <RadioGroupItem value={o.v} id={`rg-${o.v}`} />
          <Label htmlFor={`rg-${o.v}`}>
            {o.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
    <p className="text-meta mt-3 text-muted-foreground">
      One choice. Everything else can come up on the call.
    </p>
  </fieldset>
)

/** Budget ranges, each with a line explaining what it buys. */
export const WithDescriptions = () => (
  <fieldset className="w-96">
    <legend className="text-label mb-3 text-muted-foreground">
      Budget range
    </legend>
    <RadioGroup defaultValue="mid">
      <div className="flex gap-3">
        <RadioGroupItem value="low" id="rg-low" className="mt-1" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="rg-low">
            £15k – £40k
          </Label>
          <p className="text-meta text-muted-foreground">
            Discovery, or a single flow rebuilt.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <RadioGroupItem value="mid" id="rg-mid" className="mt-1" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="rg-mid">
            £40k – £80k
          </Label>
          <p className="text-meta text-muted-foreground">
            Discovery and delivery, eight to twelve weeks.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <RadioGroupItem value="high" id="rg-high" className="mt-1" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="rg-high">
            £80k and above
          </Label>
          <p className="text-meta text-muted-foreground">
            Multi-team programme with embedded research.
          </p>
        </div>
      </div>
    </RadioGroup>
  </fieldset>
)

/** Invalid: nothing selected, destructive rings, one destructive line. */
export const Invalid = () => (
  <fieldset className="w-80">
    <legend className="text-label mb-3 text-muted-foreground">Timeline</legend>
    <RadioGroup>
      {[
        { v: "q1", label: "This quarter" },
        { v: "q2", label: "Next quarter" },
        { v: "later", label: "Later in the year" },
      ].map((o) => (
        <div key={o.v} className="flex items-center gap-3">
          <RadioGroupItem value={o.v} id={`rg-e-${o.v}`} aria-invalid />
          <Label htmlFor={`rg-e-${o.v}`}>
            {o.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
    <p className="text-meta mt-3 text-destructive">
      Pick a timeline so we can check availability.
    </p>
  </fieldset>
)

/** A whole group disabled, with one option already held. */
export const Disabled = () => (
  <fieldset className="w-80">
    <legend className="text-label mb-3 text-muted-foreground">
      Engagement
    </legend>
    <RadioGroup defaultValue="fixed" disabled>
      {[
        { v: "fixed", label: "Fixed scope" },
        { v: "retainer", label: "Monthly retainer" },
        { v: "embedded", label: "Embedded team" },
      ].map((o) => (
        <div key={o.v} className="flex items-center gap-3">
          <RadioGroupItem value={o.v} id={`rg-d-${o.v}`} />
          <Label htmlFor={`rg-d-${o.v}`}>
            {o.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
    <p className="text-meta mt-3 text-muted-foreground">
      Agreed after the scoping call.
    </p>
  </fieldset>
)
