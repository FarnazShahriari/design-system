import { MailIcon, SearchIcon } from "lucide-react"

import { Checkbox } from "@farnazshahriari/design-system/ui/checkbox"
import { Input } from "@farnazshahriari/design-system/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@farnazshahriari/design-system/ui/input-group"
import { Label } from "@farnazshahriari/design-system/ui/label"
import { NativeSelect } from "@farnazshahriari/design-system/ui/native-select"
import { RadioGroup, RadioGroupItem } from "@farnazshahriari/design-system/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@farnazshahriari/design-system/ui/select"
import { Slider } from "@farnazshahriari/design-system/ui/slider"
import { Switch } from "@farnazshahriari/design-system/ui/switch"
import { Textarea } from "@farnazshahriari/design-system/ui/textarea"
import type { Entry } from "@/showcase/types"

export const forms: Entry[] = [
  {
    slug: "input",
    title: "Input",
    description:
      "A label above, a quiet rule below. Never use a placeholder in place of a label — the label disappears exactly when the user needs it most.",
    origin: "modified",
    originNote: "Shadow removed; the border alone defines the field.",
    examples: [
      {
        label: "Text fields",
        node: (
          <div className="grid max-w-md gap-4">
            <div className="space-y-2">
              <Label htmlFor="sg-name">Name</Label>
              <Input id="sg-name" placeholder="Ada Lovelace" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sg-email">Email</Label>
              <Input id="sg-email" type="email" placeholder="ada@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sg-disabled">Disabled</Label>
              <Input id="sg-disabled" disabled placeholder="Unavailable" />
            </div>
          </div>
        ),
      },
      {
        label: "Invalid state",
        note: "Error colour is the only place red appears in the entire system.",
        node: (
          <div className="max-w-md space-y-2">
            <Label htmlFor="sg-invalid">Email</Label>
            <Input id="sg-invalid" aria-invalid defaultValue="not-an-email" />
            <p className="text-meta text-destructive">
              Enter a valid email address.
            </p>
          </div>
        ),
      },
      {
        label: "Input group",
        node: (
          <div className="grid max-w-md gap-4">
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search projects" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon>
                <MailIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Newsletter signup" />
            </InputGroup>
          </div>
        ),
      },
    ],
  },
  {
    slug: "textarea",
    title: "Textarea",
    description: "Multi-line input. Same rules as the text field.",
    origin: "modified",
    originNote: "Shadow removed.",
    examples: [
      {
        label: "Default",
        node: (
          <div className="max-w-md space-y-2">
            <Label htmlFor="sg-message">Project brief</Label>
            <Textarea
              id="sg-message"
              rows={4}
              placeholder="What are you trying to build?"
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "select",
    title: "Select",
    description:
      "Use the styled select when the options benefit from richer formatting; use the native one on mobile-first forms where the OS picker is genuinely better.",
    origin: "modified",
    originNote: "Shadows removed from the trigger and the dropdown surface.",
    examples: [
      {
        label: "Styled",
        node: (
          <div className="max-w-xs space-y-2">
            <Label>Discipline</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand">Branding</SelectItem>
                <SelectItem value="product">Digital product</SelectItem>
                <SelectItem value="web">Website</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
      },
      {
        label: "Native",
        node: (
          <div className="max-w-xs space-y-2">
            <Label htmlFor="sg-native">Discipline</Label>
            <NativeSelect id="sg-native" defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option value="brand">Branding</option>
              <option value="product">Digital product</option>
              <option value="web">Website</option>
            </NativeSelect>
          </div>
        ),
      },
    ],
  },
  {
    slug: "selection-controls",
    title: "Checkbox, radio & switch",
    description:
      "Checkbox for many-of-many, radio for one-of-many, switch for a setting that takes effect immediately.",
    origin: "modified",
    originNote: "Shadows removed.",
    examples: [
      {
        label: "Checkbox",
        node: (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox id="sg-cb1" defaultChecked />
              <Label htmlFor="sg-cb1">Digital products</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="sg-cb2" />
              <Label htmlFor="sg-cb2">Websites</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="sg-cb3" disabled />
              <Label htmlFor="sg-cb3">Unavailable</Label>
            </div>
          </div>
        ),
      },
      {
        label: "Radio group",
        node: (
          <RadioGroup defaultValue="all" className="space-y-1">
            {[
              { v: "all", l: "All work" },
              { v: "product", l: "Digital products" },
              { v: "brand", l: "Branding" },
            ].map((o) => (
              <div key={o.v} className="flex items-center gap-3">
                <RadioGroupItem value={o.v} id={`sg-r-${o.v}`} />
                <Label htmlFor={`sg-r-${o.v}`}>{o.l}</Label>
              </div>
            ))}
          </RadioGroup>
        ),
      },
      {
        label: "Switch",
        node: (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Switch id="sg-sw1" defaultChecked />
              <Label htmlFor="sg-sw1">Reduce motion</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="sg-sw2" />
              <Label htmlFor="sg-sw2">Show grid overlay</Label>
            </div>
          </div>
        ),
      },
      {
        label: "Slider",
        node: (
          <div className="max-w-md space-y-2">
            <Label>Accent saturation</Label>
            <Slider defaultValue={[60]} max={100} step={1} />
          </div>
        ),
      },
    ],
  },
]
