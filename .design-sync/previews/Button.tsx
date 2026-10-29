import { Button } from "@farnazshahriari/design-system"

/** Every variant, on paper. Default is the bold 20% — the black block. */
export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button>Start a project</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Read the case study</Button>
    <Button variant="destructive">Delete</Button>
  </div>
)

/** The size ladder. Labels stay sentence case; the system never shouts in buttons. */
export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button size="sm">Small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
  </div>
)

/**
 * The pill is the one exception to square-by-default, and is reserved for a
 * single primary call to action per page.
 */
export const Pill = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button className="rounded-pill">Get in touch</Button>
    <Button variant="outline" className="rounded-pill">
      View all work
    </Button>
  </div>
)

/** Disabled drops to 45% and stops accepting pointer events. */
export const Disabled = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Button disabled>Unavailable</Button>
    <Button variant="outline" disabled>
      Unavailable
    </Button>
  </div>
)
