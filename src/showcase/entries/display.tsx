import { CommandIcon } from "lucide-react"

import { AspectRatio } from "@farnazshahriari/design-system/ui/aspect-ratio"
import { Avatar, AvatarFallback } from "@farnazshahriari/design-system/ui/avatar"
import { Badge } from "@farnazshahriari/design-system/ui/badge"
import { Button } from "@farnazshahriari/design-system/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@farnazshahriari/design-system/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@farnazshahriari/design-system/ui/carousel"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@farnazshahriari/design-system/ui/empty"
import { Kbd } from "@farnazshahriari/design-system/ui/kbd"
import { Progress } from "@farnazshahriari/design-system/ui/progress"
import { Separator } from "@farnazshahriari/design-system/ui/separator"
import { Skeleton } from "@farnazshahriari/design-system/ui/skeleton"
import { Spinner } from "@farnazshahriari/design-system/ui/spinner"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@farnazshahriari/design-system/ui/table"
import type { Entry } from "@/showcase/types"

export const display: Entry[] = [
  {
    slug: "card",
    title: "Card",
    description:
      "Square, borderless where possible, never shadowed. A card is a grouping device, not a raised surface.",
    origin: "modified",
    originNote: "Shadow removed; the card is defined by its border and background only.",
    examples: [
      {
        label: "Default",
        node: (
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project title</CardTitle>
                <CardDescription>
                  A one-line description of what was made and for whom.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Body content sits here. Note there is no shadow — the border and
                the surface do all the work.
              </CardContent>
              <CardFooter>
                <Button size="sm">View case study</Button>
              </CardFooter>
            </Card>
            <Card className="border-transparent bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle>Accent card</CardTitle>
                <CardDescription className="text-accent-foreground/80">
                  A color block instead of a border.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-accent-foreground/80">
                This is the second of the two places per page the accent should
                appear.
              </CardContent>
            </Card>
          </div>
        ),
      },
    ],
  },
  {
    slug: "badge",
    title: "Badge",
    description:
      "Always a pill — the one shape exception, shared with the primary button. Use for taxonomy, never for decoration.",
    origin: "restyled",
    examples: [
      {
        label: "Variants",
        node: (
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        ),
      },
      {
        label: "In use",
        note: "A tag row under a project title — the most common real use.",
        node: (
          <div className="space-y-2">
            <p className="text-h4">Financial super-app</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Product design</Badge>
              <Badge variant="outline">Design system</Badge>
              <Badge variant="outline">iOS</Badge>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    slug: "media",
    title: "Media",
    description:
      "Lock every aspect ratio so a reveal never causes layout shift. Images are full-bleed or edge-to-edge inside the container, square-cornered, never captioned on top.",
    origin: "restyled",
    examples: [
      {
        label: "Aspect ratio",
        node: (
          <div className="grid max-w-2xl gap-4 sm:grid-cols-2">
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <div className="flex h-full items-center justify-center text-meta text-muted-foreground">
                16 / 9
              </div>
            </AspectRatio>
            <AspectRatio ratio={1} className="bg-muted">
              <div className="flex h-full items-center justify-center text-meta text-muted-foreground">
                1 / 1
              </div>
            </AspectRatio>
          </div>
        ),
      },
      {
        label: "Carousel",
        note: "Controls are bare glyphs in the gutter — never circles overlaid on the media.",
        node: (
          <Carousel className="mx-auto w-full max-w-md">
            <CarouselContent>
              {[1, 2, 3, 4].map((i) => (
                <CarouselItem key={i}>
                  <AspectRatio ratio={4 / 3} className="bg-muted">
                    <div className="flex h-full items-center justify-center text-h2 text-muted-foreground">
                      {i}
                    </div>
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ),
      },
    ],
  },
  {
    slug: "table",
    title: "Table",
    description: "Hairline rules, no zebra striping, no vertical borders.",
    origin: "restyled",
    examples: [
      {
        label: "Default",
        node: (
          <Table>
            <TableCaption>Recent projects</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Discipline</TableHead>
                <TableHead className="text-right">Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Northwind", "Digital product", "2026"],
                ["Meridian", "Branding", "2025"],
                ["Atlas Bank", "Website", "2025"],
              ].map((r) => (
                <TableRow key={r[0]}>
                  <TableCell className="font-medium">{r[0]}</TableCell>
                  <TableCell className="text-muted-foreground">{r[1]}</TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {r[2]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ),
      },
    ],
  },
  {
    slug: "status",
    title: "Status & placeholders",
    description:
      "What the interface shows while it has nothing to show. Skeletons match the shape of what is loading; empty states say what to do next.",
    origin: "restyled",
    examples: [
      {
        label: "Skeleton",
        node: (
          <div className="max-w-md space-y-3">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        ),
      },
      {
        label: "Progress & spinner",
        node: (
          <div className="max-w-md space-y-6">
            <Progress value={62} />
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Spinner /> Loading projects
            </div>
          </div>
        ),
      },
      {
        label: "Empty state",
        node: (
          <Empty className="max-w-md border">
            <EmptyHeader>
              <EmptyTitle>No projects yet</EmptyTitle>
              <EmptyDescription>
                Published case studies will appear here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ),
      },
    ],
  },
  {
    slug: "misc",
    title: "Avatar, separator & kbd",
    description: "The small parts.",
    origin: "restyled",
    examples: [
      {
        label: "Avatar",
        node: (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </div>
        ),
      },
      {
        label: "Separator",
        node: (
          <div className="max-w-md space-y-4">
            <p className="text-sm text-muted-foreground">Above</p>
            <Separator />
            <p className="text-sm text-muted-foreground">Below</p>
          </div>
        ),
      },
      {
        label: "Keyboard",
        node: (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            Press <Kbd><CommandIcon className="size-3" /></Kbd> <Kbd>K</Kbd> to search
          </p>
        ),
      },
    ],
  },
]
