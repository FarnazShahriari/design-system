import { Badge } from "@farnazshahriari/design-system"

/** Every variant. Default is the bold black chip; the rest step down from it. */
export const Variants = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="ghost">Ghost</Badge>
    <Badge variant="link">Link</Badge>
    <Badge variant="destructive">Destructive</Badge>
  </div>
)

/**
 * What the badge is actually for: taxonomy. One project's disciplines and
 * delivery tags, read as a single line.
 */
export const ProjectTags = () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary">Service design</Badge>
      <Badge variant="secondary">Research</Badge>
      <Badge variant="secondary">Design system</Badge>
      <Badge variant="secondary">Accessibility</Badge>
      <Badge variant="outline">2026</Badge>
    </div>
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary">Interaction design</Badge>
      <Badge variant="secondary">Prototyping</Badge>
      <Badge variant="secondary">Handover</Badge>
      <Badge variant="outline">2025</Badge>
    </div>
  </div>
)

/** Beside a heading, the badge carries state — the one place it earns colour. */
export const WithHeading = () => (
  <div className="flex flex-col gap-5 max-w-[52ch]">
    <div className="flex items-center gap-3">
      <h3 className="text-h4">Northwind</h3>
      <Badge>Live</Badge>
    </div>
    <div className="flex items-center gap-3">
      <h3 className="text-h4">Meridian</h3>
      <Badge variant="outline">In review</Badge>
    </div>
    <div className="flex items-center gap-3">
      <h3 className="text-h4">Atlas</h3>
      <Badge variant="destructive">Under embargo</Badge>
    </div>
  </div>
)
