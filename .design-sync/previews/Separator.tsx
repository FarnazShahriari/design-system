import { Separator } from "@farnazshahriari/design-system"

/**
 * Horizontal is the default: a 1px border-coloured rule holding two blocks of
 * content apart. Unlike Divider, it draws a line — use it when the break needs
 * to be stated, not just felt.
 */
export const Horizontal = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <div>
      <p className="text-label text-muted-foreground">Role</p>
      <p className="mt-1 text-body text-foreground">
        Lead designer, research through delivery
      </p>
    </div>
    <Separator />
    <div>
      <p className="text-label text-muted-foreground">Team</p>
      <p className="mt-1 text-body text-foreground">
        Two engineers, one content designer, one product manager
      </p>
    </div>
  </div>
)

/**
 * Vertical inherits h-full, which is nothing in a flex row — so the row sets an
 * explicit height. Here it separates inline metadata.
 */
export const Vertical = () => (
  <div className="flex h-5 items-center gap-3 text-meta text-muted-foreground">
    <span>Public sector</span>
    <Separator orientation="vertical" />
    <span>2025</span>
    <Separator orientation="vertical" />
    <span>Service design</span>
    <Separator orientation="vertical" />
    <span>7 screens</span>
  </div>
)

/** Repeated between list rows, it reads as a ruled index. */
export const BetweenRows = () => (
  <div className="w-full max-w-md">
    <div className="flex items-baseline justify-between py-3">
      <span className="text-body text-foreground">Northwind</span>
      <span className="text-meta text-muted-foreground">2026</span>
    </div>
    <Separator />
    <div className="flex items-baseline justify-between py-3">
      <span className="text-body text-foreground">Meridian</span>
      <span className="text-meta text-muted-foreground">2025</span>
    </div>
    <Separator />
    <div className="flex items-baseline justify-between py-3">
      <span className="text-body text-foreground">Atlas</span>
      <span className="text-meta text-muted-foreground">2025</span>
    </div>
  </div>
)

/** Both orientations at once: a ruled heading over a vertically split stat strip. */
export const Combined = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <h4 className="text-h4 text-foreground">Northwind, in numbers</h4>
    <Separator />
    <div className="flex h-10 items-center gap-6">
      <div>
        <p className="text-h4 text-foreground">11</p>
        <p className="text-label text-muted-foreground">Screens</p>
      </div>
      <Separator orientation="vertical" />
      <div>
        <p className="text-h4 text-foreground">18</p>
        <p className="text-label text-muted-foreground">Interviews</p>
      </div>
      <Separator orientation="vertical" />
      <div>
        <p className="text-h4 text-foreground">6</p>
        <p className="text-label text-muted-foreground">Months</p>
      </div>
    </div>
  </div>
)
