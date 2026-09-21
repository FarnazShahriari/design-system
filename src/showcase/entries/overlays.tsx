import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@farnazshahriari/design-system/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@farnazshahriari/design-system/ui/alert-dialog"
import { Button } from "@farnazshahriari/design-system/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@farnazshahriari/design-system/ui/collapsible"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@farnazshahriari/design-system/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@farnazshahriari/design-system/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@farnazshahriari/design-system/ui/hover-card"
import { Label } from "@farnazshahriari/design-system/ui/label"
import { Input } from "@farnazshahriari/design-system/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@farnazshahriari/design-system/ui/popover"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@farnazshahriari/design-system/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "@farnazshahriari/design-system/ui/tooltip"
import type { Entry } from "@/showcase/types"

export const overlays: Entry[] = [
  {
    slug: "dialog",
    title: "Dialog",
    description:
      "A modal interruption. Every overlay in this system is defined by a border and an opaque surface rather than a shadow — open one and note there is no lift, only separation.",
    origin: "modified",
    originNote: "Shadow removed from the content surface.",
    examples: [
      {
        label: "Dialog",
        node: (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Start a project</DialogTitle>
                <DialogDescription>
                  Tell us what you are trying to build.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2">
                <Label htmlFor="sg-dialog-email">Email</Label>
                <Input id="sg-dialog-email" placeholder="you@example.com" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Send</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        label: "Alert dialog",
        note: "For destructive confirmations only — it deliberately cannot be dismissed by clicking outside.",
        node: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete project</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this project?</AlertDialogTitle>
                <AlertDialogDescription>
                  This cannot be undone. The case study and its media will be
                  permanently removed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
      },
      {
        label: "Sheet",
        note: "The mobile navigation pattern — a full-height panel sliding in from an edge.",
        node: (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  On small screens the whole navigation lives here.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ),
      },
    ],
  },
  {
    slug: "menus",
    title: "Menus & popovers",
    description: "Transient surfaces anchored to a trigger.",
    origin: "modified",
    originNote: "Shadows removed from every floating surface.",
    examples: [
      {
        label: "Dropdown menu",
        node: (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Work</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>All projects</DropdownMenuItem>
              <DropdownMenuItem>Digital products</DropdownMenuItem>
              <DropdownMenuItem>Branding</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                Clear filters
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
      {
        label: "Popover",
        node: (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="space-y-2">
              <p className="text-h4">Filter</p>
              <p className="text-sm text-muted-foreground">
                Popovers hold interactive content; tooltips never do.
              </p>
            </PopoverContent>
          </Popover>
        ),
      },
      {
        label: "Tooltip",
        note: "Label-only, never interactive, never the sole carrier of information.",
        node: (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Square corners, no shadow</TooltipContent>
          </Tooltip>
        ),
      },
      {
        label: "Hover card",
        node: (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">Northwind</Button>
            </HoverCardTrigger>
            <HoverCardContent className="space-y-1">
              <p className="text-h4">Northwind</p>
              <p className="text-sm text-muted-foreground">
                A financial super-app, redesigned around everyday clarity.
              </p>
            </HoverCardContent>
          </HoverCard>
        ),
      },
    ],
  },
  {
    slug: "disclosure",
    title: "Accordion & collapsible",
    description:
      "Progressive disclosure. The FAQ pattern this system inherits keeps one row open at a time and sits on the off-white surface.",
    origin: "modified",
    originNote:
      "Chevron enlarged to size-5 and left on the trigger's own colour rather than muted — at the sizes this type scale reaches, a 16px hairline in a lighter grey read as an afterthought next to the row title.",
    examples: [
      {
        label: "Accordion",
        node: (
          <Accordion type="single" collapsible className="max-w-xl">
            {[
              {
                q: "How do I change the whole theme?",
                a: "Edit the token values in src/app/globals.css. Nothing else references a raw colour.",
              },
              {
                q: "Can I add more components later?",
                a: "Yes — npx shadcn@latest add <name>. New components inherit the theme automatically because they reference the same token names.",
              },
              {
                q: "Why are there no shadows?",
                a: "Depth in this system comes from colour blocks and overlap. Every shadow utility was stripped from the component sources.",
              },
            ].map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ),
      },
      {
        label: "Collapsible",
        node: (
          <Collapsible className="max-w-xl space-y-2">
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                Toggle details
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="rounded-md border p-4 text-sm text-muted-foreground">
              A single show/hide region, when you do not need a whole accordion.
            </CollapsibleContent>
          </Collapsible>
        ),
      },
    ],
  },
]
