import { ArrowRightIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@farnazshahriari/design-system/ui/breadcrumb"
import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@farnazshahriari/design-system/ui/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@farnazshahriari/design-system/ui/tabs"
import type { Entry } from "@/showcase/types"

export const navigation: Entry[] = [
  {
    slug: "link-underline",
    title: "Underline link",
    description:
      "The workhorse interaction of the whole system. A permanent hairline sits under every link; on hover a second rule in the current text colour wipes across it from the left. Because the resting rule is always visible, colour is never the only signal that something is a link.",
    origin: "custom",
    originNote:
      "Written for this system — shadcn has no equivalent primitive. See src/components/ui/link-underline.tsx.",
    examples: [
      {
        label: "In a sentence",
        note: "Hover to see the wipe. It honours prefers-reduced-motion, and the focus ring uses the system's 2px / 7px offset treatment — tab to it to check.",
        node: (
          <p className="max-w-[60ch] text-base">
            This system was assembled from an open-source component library and
            retokenized against a{" "}
            <LinkUnderline href="/foundations/colors">
              restrained palette
            </LinkUnderline>
            . The interaction language borrows from editorial portfolio sites —
            you can read more in the{" "}
            <LinkUnderline href="/foundations/motion">
              motion foundations
            </LinkUnderline>
            .
          </p>
        ),
      },
      {
        label: "Standalone, with arrow",
        note: "The label, the rule and the arrow are the standard 'read more' construction — never the words 'Learn more'.",
        node: (
          <div className="flex flex-col items-start gap-4">
            <LinkUnderline href="/components/card" className="text-lead">
              View all work
            </LinkUnderline>
            <LinkUnderline href="/components/card" className="inline-flex items-center gap-2">
              Explore the archive <ArrowRightIcon className="size-4" />
            </LinkUnderline>
          </div>
        ),
      },
      {
        label: "On a dark surface",
        node: (
          <div className="rounded-md bg-primary p-6 text-primary-foreground">
            <p className="max-w-[50ch]">
              It inherits currentColor, so it needs no inverted variant —{" "}
              <LinkUnderline href="/foundations/colors" className="text-primary-foreground">
                the same component
              </LinkUnderline>{" "}
              works on any surface.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Switching between peer views of the same thing.",
    origin: "modified",
    originNote: "Active-state shadow removed; the active tab is marked by its surface, not a lift.",
    examples: [
      {
        label: "Default",
        node: (
          <Tabs defaultValue="overview" className="max-w-md">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="outcome">Outcome</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="pt-4 text-sm text-muted-foreground">
              What was made and for whom.
            </TabsContent>
            <TabsContent value="process" className="pt-4 text-sm text-muted-foreground">
              How the work was approached.
            </TabsContent>
            <TabsContent value="outcome" className="pt-4 text-sm text-muted-foreground">
              What changed as a result.
            </TabsContent>
          </Tabs>
        ),
      },
    ],
  },
  {
    slug: "breadcrumb",
    title: "Breadcrumb & pagination",
    description: "Positional navigation. Both stay quiet — they are orientation, not content.",
    origin: "restyled",
    examples: [
      {
        label: "Breadcrumb",
        node: (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components/card">Work</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Northwind</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
      },
      {
        label: "Pagination",
        node: (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
      },
    ],
  },
]
