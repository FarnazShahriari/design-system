import * as React from "react"
import Link from "next/link"

import { ViewTransition } from "@/components/motion/view-transition"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * The work-listing pattern: a grid of projects where the whole card is one
 * link. There is no button, no border, no shadow — the media does the work.
 *
 * The source material staggers its two columns so the grid drifts rather
 * than marching in rows. That is `stagger`, and it is off by default:
 * it reads beautifully with eight considered projects and badly with three.
 */

function ProjectGrid({
  className,
  stagger = false,
  children,
  ...props
}: React.ComponentProps<"ul"> & { stagger?: boolean }) {
  return (
    <ul
      data-slot="project-grid"
      className={cn(
        "grid list-none grid-cols-1 gap-x-6 gap-y-10 p-0 md:grid-cols-2 md:gap-y-16",
        // offset the second column downward so the two columns drift
        stagger && "md:[&>li:nth-child(even)]:mt-16 xl:[&>li:nth-child(even)]:mt-24",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

function ProjectCard({
  href,
  title,
  description,
  tags,
  ratio = "4 / 3",
  media,
  transitionName,
  className,
  ...props
}: Omit<React.ComponentProps<"li">, "title"> & {
  href: string
  title: string
  /**
   * Pairs this title with the same-named title on the destination page, so
   * the word travels and scales into place instead of being replaced. Both
   * sides must use the same name — see projectTitleTransition().
   */
  transitionName?: string
  description?: string
  tags?: string[]
  /** CSS aspect-ratio for the media frame. Locked so nothing reflows on load. */
  ratio?: string
  /** The media itself. Falls back to a flat placeholder block. */
  media?: React.ReactNode
}) {
  return (
    <li data-slot="project-card" className={cn("min-w-0", className)} {...props}>
      <Link href={href} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        <div
          className="w-full overflow-hidden bg-muted"
          style={{ aspectRatio: ratio }}
        >
          {media ?? (
            <div className="flex h-full items-center justify-center text-meta text-muted-foreground">
              {title}
            </div>
          )}
        </div>
        <div className="mt-4 flex flex-col gap-2 md:mt-6">
          {/* Titles never wrap — a two-line title breaks the grid's rhythm. */}
          {transitionName ? (
            <ViewTransition name={transitionName} share="morph" default="none">
              <h3 className="truncate text-h4">{title}</h3>
            </ViewTransition>
          ) : (
            <h3 className="truncate text-h4">{title}</h3>
          )}
          {description ? (
            <p className="truncate text-sm text-muted-foreground">{description}</p>
          ) : null}
          {tags?.length ? (
            <div className="mt-1 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </Link>
    </li>
  )
}

export { ProjectGrid, ProjectCard }
