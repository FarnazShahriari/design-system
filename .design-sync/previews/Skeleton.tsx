import { Skeleton } from "@farnazshahriari/design-system"

/**
 * The shape a work-index card will take once it loads: a media block, a title
 * line, and a shorter meta line. Skeletons mirror the real layout, so the page
 * does not jump when the content arrives. Square, like everything else.
 */
export const ProjectCard = () => (
  <div className="w-64">
    <Skeleton className="h-40 w-full rounded-none" />
    <Skeleton className="mt-4 h-5 w-44 rounded-none" />
    <Skeleton className="mt-2 h-4 w-24 rounded-none" />
  </div>
)

/** Three cards loading together — the work index for the first second. */
export const CardGrid = () => (
  <div className="flex gap-5">
    <div className="w-56">
      <Skeleton className="h-32 w-full rounded-none" />
      <Skeleton className="mt-4 h-5 w-40 rounded-none" />
      <Skeleton className="mt-2 h-4 w-24 rounded-none" />
    </div>
    <div className="w-56">
      <Skeleton className="h-32 w-full rounded-none" />
      <Skeleton className="mt-4 h-5 w-24 rounded-none" />
      <Skeleton className="mt-2 h-4 w-16 rounded-none" />
    </div>
    <div className="w-56">
      <Skeleton className="h-32 w-full rounded-none" />
      <Skeleton className="mt-4 h-5 w-44 rounded-none" />
      <Skeleton className="mt-2 h-4 w-24 rounded-none" />
    </div>
  </div>
)

/** A case-study intro: heading, then body lines that ragged-end like prose. */
export const TextBlock = () => (
  <div className="w-full max-w-md">
    <Skeleton className="h-8 w-3/4 rounded-none" />
    <Skeleton className="mt-6 h-4 w-full rounded-none" />
    <Skeleton className="mt-2 h-4 w-full rounded-none" />
    <Skeleton className="mt-2 h-4 w-2/3 rounded-none" />
    <Skeleton className="mt-2 h-4 w-1/3 rounded-none" />
  </div>
)

/** The ruled index, loading: a project name left, a year right, per row. */
export const IndexRows = () => (
  <div className="w-full max-w-md border-t border-border">
    <div className="flex items-center justify-between border-b border-border py-4">
      <Skeleton className="h-4 w-44 rounded-none" />
      <Skeleton className="h-4 w-16 rounded-none" />
    </div>
    <div className="flex items-center justify-between border-b border-border py-4">
      <Skeleton className="h-4 w-24 rounded-none" />
      <Skeleton className="h-4 w-16 rounded-none" />
    </div>
    <div className="flex items-center justify-between border-b border-border py-4">
      <Skeleton className="h-4 w-40 rounded-none" />
      <Skeleton className="h-4 w-16 rounded-none" />
    </div>
  </div>
)
