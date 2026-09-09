import { ArrowRightIcon, BoldIcon, ItalicIcon, PlusIcon, UnderlineIcon } from "lucide-react"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { ButtonGroup } from "@farnazshahriari/design-system/ui/button-group"
import { Toggle } from "@farnazshahriari/design-system/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@farnazshahriari/design-system/ui/toggle-group"
import type { Entry } from "@/showcase/types"

export const actions: Entry[] = [
  {
    slug: "button",
    title: "Button",
    description:
      "The system is deliberately light on buttons — most actions are text links. Reach for a button when something is a genuine commitment, and use the pill for the single primary action on a page.",
    origin: "modified",
    originNote:
      "Stock shadcn button with the shadow-xs removed from the outline variant, per the no-shadows rule.",
    examples: [
      {
        label: "Variants",
        node: (
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        ),
      },
      {
        label: "The pill",
        note: "rounded-pill is the one exception to the square-by-default rule. Use it for the primary call to action — and only one per page.",
        node: (
          <div className="flex flex-wrap items-center gap-3">
            <Button className="rounded-pill">Start a project</Button>
            <Button variant="outline" className="rounded-pill">
              Secondary pill
            </Button>
          </div>
        ),
      },
      {
        label: "Sizes",
        node: (
          <div className="flex flex-wrap items-center gap-3">
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Add">
              <PlusIcon />
            </Button>
          </div>
        ),
      },
      {
        label: "With icons",
        node: (
          <div className="flex flex-wrap items-center gap-3">
            <Button>
              View case study <ArrowRightIcon />
            </Button>
            <Button variant="outline">
              <PlusIcon /> Add item
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        ),
      },
    ],
  },
  {
    slug: "button-group",
    title: "Button group",
    description: "Related actions bound into one unit, sharing edges.",
    origin: "restyled",
    examples: [
      {
        label: "Grouped",
        node: (
          <ButtonGroup>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
            <Button variant="outline">Year</Button>
          </ButtonGroup>
        ),
      },
    ],
  },
  {
    slug: "toggle",
    title: "Toggle",
    description: "A button with an on state. Use for formatting-style controls, not for settings — a switch is clearer for those.",
    origin: "restyled",
    examples: [
      {
        label: "Single",
        node: (
          <div className="flex flex-wrap items-center gap-3">
            <Toggle aria-label="Bold">
              <BoldIcon />
            </Toggle>
            <Toggle variant="outline" aria-label="Italic">
              <ItalicIcon />
            </Toggle>
            <Toggle defaultPressed aria-label="Underline">
              <UnderlineIcon />
            </Toggle>
          </div>
        ),
      },
      {
        label: "Group",
        node: (
          <ToggleGroup type="multiple" variant="outline">
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        ),
      },
    ],
  },
]
