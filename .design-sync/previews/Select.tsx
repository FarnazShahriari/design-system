import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@farnazshahriari/design-system"

/** Closed, with a real chosen value — the state the form spends its life in. */
export const Chosen = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label className="text-muted-foreground"><span className="text-label">Discipline</span></Label>
      <Select defaultValue="service">
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="service">Service design</SelectItem>
          <SelectItem value="product">Digital product</SelectItem>
          <SelectItem value="brand">Brand</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-meta text-muted-foreground">
        Pick the closest fit — we can refine it on the call.
      </p>
    </div>
    <div className="flex flex-col gap-2">
      <Label className="text-muted-foreground"><span className="text-label">Budget range</span></Label>
      <Select defaultValue="40">
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="15">£15k – £40k</SelectItem>
          <SelectItem value="40">£40k – £80k</SelectItem>
          <SelectItem value="80">£80k and above</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
)

/** Nothing chosen yet: the placeholder reads as muted, not as a value. */
export const Placeholder = () => (
  <div className="flex w-80 flex-col gap-2">
    <Label className="text-muted-foreground"><span className="text-label">Timeline</span></Label>
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="When should this land?" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="q1">This quarter</SelectItem>
        <SelectItem value="q2">Next quarter</SelectItem>
        <SelectItem value="later">Later in the year</SelectItem>
      </SelectContent>
    </Select>
    <p className="text-meta text-muted-foreground">
      Studio books roughly eight weeks ahead.
    </p>
  </div>
)

/**
 * Open, forced with the `open` prop so the menu renders statically. Popper
 * placement keeps the menu below the trigger instead of over it: grouped
 * items, a separator, a disabled option and the check on the current value.
 */
export const Open = () => (
  <div className="flex h-80 w-80 flex-col gap-2">
    <Label className="text-muted-foreground"><span className="text-label">Discipline</span></Label>
    <Select defaultValue="product" open>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper" side="bottom" align="start" sideOffset={6}>
        <SelectGroup>
          <SelectLabel>Strategy</SelectLabel>
          <SelectItem value="service">Service design</SelectItem>
          <SelectItem value="research">Research and discovery</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Delivery</SelectLabel>
          <SelectItem value="product">Digital product</SelectItem>
          <SelectItem value="brand">Brand</SelectItem>
          <SelectItem value="retainer" disabled>
            Retainer — fully booked
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
)

/** Invalid and disabled, each with the reason written out. */
export const States = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label className="text-muted-foreground"><span className="text-label">Discipline</span></Label>
      <Select>
        <SelectTrigger className="w-full" aria-invalid>
          <SelectValue placeholder="Select a discipline" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="service">Service design</SelectItem>
          <SelectItem value="product">Digital product</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-meta text-destructive">Choose one to continue.</p>
    </div>
    <div className="flex flex-col gap-2">
      <Label className="text-muted-foreground"><span className="text-label">Engagement</span></Label>
      <Select defaultValue="fixed" disabled>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="fixed">Fixed scope</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-meta text-muted-foreground">
        Set once the budget range is agreed.
      </p>
    </div>
  </div>
)
