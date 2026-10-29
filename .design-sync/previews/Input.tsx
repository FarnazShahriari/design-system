import { Input, Label } from "@farnazshahriari/design-system"

/** A field is never a naked control: label above, control, one calm helper line. */
export const Default = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-name" className="text-muted-foreground"><span className="text-label">Full name</span></Label>
      <Input id="in-name" placeholder="Your name" />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-email" className="text-muted-foreground"><span className="text-label">Email</span></Label>
      <Input id="in-email" type="email" placeholder="you@studio.com" />
      <p className="text-meta text-muted-foreground">
        Used only to reply to this enquiry.
      </p>
    </div>
  </div>
)

/** Filled, via defaultValue — the state a returning visitor actually sees. */
export const Filled = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-name-f" className="text-muted-foreground"><span className="text-label">Full name</span></Label>
      <Input id="in-name-f" defaultValue="Mara Okonjo" />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-org-f" className="text-muted-foreground"><span className="text-label">Organisation</span></Label>
      <Input id="in-org-f" defaultValue="Northwind Rail" />
    </div>
  </div>
)

/** The input types the contact form really uses. */
export const Types = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-tel" className="text-muted-foreground"><span className="text-label">Phone</span></Label>
      <Input id="in-tel" type="tel" defaultValue="+44 20 7946 0712" />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-date" className="text-muted-foreground"><span className="text-label">Preferred start</span></Label>
      <Input id="in-date" type="date" defaultValue="2027-02-01" />
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-num" className="text-muted-foreground"><span className="text-label">Weeks available</span></Label>
      <Input id="in-num" type="number" defaultValue="12" />
    </div>
  </div>
)

/** Invalid: destructive border on the control, destructive copy under it. */
export const Invalid = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-email-e" className="text-muted-foreground"><span className="text-label">Email</span></Label>
      <Input
        id="in-email-e"
        type="email"
        aria-invalid
        defaultValue="mara.okonjo@"
      />
      <p className="text-meta text-destructive">
        Enter a full email address, including the domain.
      </p>
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-budget-e" className="text-muted-foreground"><span className="text-label">Budget</span></Label>
      <Input id="in-budget-e" aria-invalid placeholder="Required" />
      <p className="text-meta text-destructive">A budget range is required.</p>
    </div>
  </div>
)

/** Disabled drops to 50% and refuses the pointer. */
export const Disabled = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-ref" className="text-muted-foreground"><span className="text-label">Reference</span></Label>
      <Input id="in-ref" disabled defaultValue="NW-2027-014" />
      <p className="text-meta text-muted-foreground">
        Assigned automatically once the brief is received.
      </p>
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="in-retainer" className="text-muted-foreground"><span className="text-label">Retainer</span></Label>
      <Input id="in-retainer" disabled placeholder="Not available" />
    </div>
  </div>
)
