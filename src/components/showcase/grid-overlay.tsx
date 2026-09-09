"use client"

import * as React from "react"

import { Container } from "@farnazshahriari/design-system/ui/container"

/**
 * Draws the 12 column guides over a page, so a layout can be checked
 * against the grid it is supposed to sit on.
 *
 * It renders inside the previewed page rather than on top of the iframe,
 * which means it shares the page's coordinate system and uses the same
 * Container — so the guides line up with the real margins at every
 * breakpoint instead of approximating them.
 *
 * Reads the flag from window.location rather than searchParams so the
 * preview pages stay static.
 */
export function GridOverlay() {
  const [on, setOn] = React.useState(false)

  React.useEffect(() => {
    const check = () =>
      setOn(new URLSearchParams(window.location.search).get("grid") === "1")
    check()
    window.addEventListener("popstate", check)
    return () => window.removeEventListener("popstate", check)
  }, [])

  if (!on) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
    >
      <Container className="h-full">
        <div className="grid h-full grid-cols-12 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="h-full bg-accent/12" />
          ))}
        </div>
      </Container>
    </div>
  )
}
