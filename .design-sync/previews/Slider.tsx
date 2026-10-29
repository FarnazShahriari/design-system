import { Label, Slider } from "@farnazshahriari/design-system"

/** A single value, with the number read out beside the label. */
export const Single = () => (
  <div className="w-72 flex flex-col gap-3">
    <div className="flex items-baseline justify-between">
      <Label htmlFor="sl-weeks" className="text-muted-foreground"><span className="text-label">Weeks available</span></Label>
      <span className="text-body tabular-nums">12</span>
    </div>
    <Slider id="sl-weeks" defaultValue={[12]} min={2} max={26} />
    <p className="text-meta text-muted-foreground">
      Two to twenty-six weeks. Most engagements run eight.
    </p>
  </div>
)

/** Two thumbs, for the budget range the brief actually asks for. */
export const Range = () => (
  <div className="w-72 flex flex-col gap-3">
    <div className="flex items-baseline justify-between">
      <Label htmlFor="sl-budget" className="text-muted-foreground"><span className="text-label">Budget range</span></Label>
      <span className="text-body tabular-nums">£40k – £80k</span>
    </div>
    <Slider id="sl-budget" defaultValue={[40, 80]} min={10} max={120} />
    <div className="text-meta flex justify-between text-muted-foreground">
      <span>£10k</span>
      <span>£120k</span>
    </div>
  </div>
)

/** Stepped, so the value lands on something the studio can quote. */
export const Stepped = () => (
  <div className="w-72 flex flex-col gap-3">
    <div className="flex items-baseline justify-between">
      <Label htmlFor="sl-days" className="text-muted-foreground"><span className="text-label">Days per week</span></Label>
      <span className="text-body tabular-nums">3</span>
    </div>
    <Slider id="sl-days" defaultValue={[3]} min={1} max={5} step={1} />
    <div className="text-meta flex justify-between text-muted-foreground">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
    </div>
  </div>
)

/** Disabled: the whole track drops to 50%, value still legible. */
export const Disabled = () => (
  <div className="w-72 flex flex-col gap-3">
    <div className="flex items-baseline justify-between">
      <Label htmlFor="sl-ret" className="text-muted-foreground"><span className="text-label">Retainer hours</span></Label>
      <span className="text-body tabular-nums">24</span>
    </div>
    <Slider id="sl-ret" defaultValue={[24]} min={0} max={80} disabled />
    <p className="text-meta text-muted-foreground">
      Set once a retainer is agreed.
    </p>
  </div>
)
