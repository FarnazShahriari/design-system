import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@farnazshahriari/design-system"

/** Page two of a short work index. The active page is the outlined one. */
export const Default = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)

/**
 * The first page: Previous has nowhere to go, so it drops to 45% and stops
 * taking the pointer — the same treatment a disabled button gets.
 */
export const FirstPage = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          href="#"
          aria-disabled="true"
          className="pointer-events-none opacity-50"
        />
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
)

/** Prev and next only, with the count carried in a meta line. Calmest form. */
export const PrevNextOnly = () => (
  <div className="flex flex-col items-center gap-2">
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    <p className="text-meta text-muted-foreground">Page 2 of 7</p>
  </div>
)

/** Where it actually lives: closing out a page of the work index. */
export const BelowTheIndex = () => (
  <div className="w-full max-w-md">
    <p className="text-label text-muted-foreground">Selected work</p>
    <ul className="mt-4 border-t border-border">
      <li className="flex items-baseline justify-between border-b border-border py-3">
        <span className="text-body text-foreground">Northwind</span>
        <span className="text-meta text-muted-foreground">2026</span>
      </li>
      <li className="flex items-baseline justify-between border-b border-border py-3">
        <span className="text-body text-foreground">Meridian</span>
        <span className="text-meta text-muted-foreground">2025</span>
      </li>
      <li className="flex items-baseline justify-between border-b border-border py-3">
        <span className="text-body text-foreground">Atlas</span>
        <span className="text-meta text-muted-foreground">2025</span>
      </li>
    </ul>
    <div className="mt-6">
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
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  </div>
)
