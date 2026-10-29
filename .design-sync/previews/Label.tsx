import {
  Checkbox,
  Input,
  Label,
  Switch,
  Textarea,
} from "@farnazshahriari/design-system"

/**
 * Label's real job: the uppercase line above a control, tied to it by
 * htmlFor so the whole thing is one target.
 */
export const AboveControl = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label htmlFor="lb-email" className="text-muted-foreground">
        <span className="text-label">Email</span>
      </Label>
      <Input id="lb-email" type="email" defaultValue="mara@northwindrail.com" />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="lb-brief" className="text-muted-foreground">
        <span className="text-label">Project brief</span>
      </Label>
      <Textarea
        id="lb-brief"
        rows={3}
        defaultValue="Rebuild regional rail booking, four operators, eleven screens today."
      />
    </div>
  </div>
)

/** Required and optional read as meta beside the label, never as a colour. */
export const RequiredAndOptional = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label htmlFor="lb-name" className="text-muted-foreground">
        <span className="text-label">Full name</span>
        <span className="text-meta text-foreground">Required</span>
      </Label>
      <Input id="lb-name" defaultValue="Mara Okonjo" />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="lb-site" className="text-muted-foreground">
        <span className="text-label">Website</span>
        <span className="text-meta">Optional</span>
      </Label>
      <Input id="lb-site" placeholder="northwindrail.com" />
    </div>
  </div>
)

/** Beside a control, the label is the clickable text of the row. */
export const BesideControl = () => (
  <div className="flex w-80 flex-col gap-4">
    <div className="flex items-center gap-3">
      <Checkbox id="lb-cb" defaultChecked />
      <Label htmlFor="lb-cb">
        Send me the quarterly case study
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Switch id="lb-sw" defaultChecked />
      <Label htmlFor="lb-sw">
        Available for new work
      </Label>
    </div>
  </div>
)

/** A disabled control carries its label down with it, through peer-disabled. */
export const WithDisabledControl = () => (
  <div className="flex w-80 flex-col gap-4">
    <div className="flex items-center gap-3">
      <Checkbox id="lb-cb-d" disabled defaultChecked />
      <Label htmlFor="lb-cb-d">
        Retainer newsletter
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Switch id="lb-sw-d" disabled />
      <Label htmlFor="lb-sw-d">
        Open to speaking
      </Label>
    </div>
    <p className="text-meta text-muted-foreground">
      Both unavailable until the enquiry is confirmed.
    </p>
  </div>
)
