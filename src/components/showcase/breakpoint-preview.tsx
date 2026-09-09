"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

/**
 * Renders a real page inside a frame at a chosen CSS width, scaled down to
 * fit the column. Scaling rather than horizontal scrolling matters here:
 * the point is to compare how a layout resolves at two widths at once, and
 * you cannot compare things you have to scroll between.
 */

const PRESETS = [
  { id: "mobile", label: "Mobile", width: 390 },
  { id: "tablet", label: "Tablet", width: 768 },
  { id: "desktop", label: "Desktop", width: 1280 },
] as const

type PresetId = (typeof PRESETS)[number]["id"]
type Mode = PresetId | "compare"

function Frame({
  src,
  width,
  height,
  label,
}: {
  src: string
  width: number
  height: number
  label: string
}) {
  const holder = React.useRef<HTMLDivElement>(null)
  const [scale, setScale] = React.useState(1)

  React.useEffect(() => {
    const el = holder.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / width))
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [width])

  // Every frame gets the same box height, so a scaled-down desktop sits
  // beside a full-size mobile without one of them looking like a stub. The
  // scaled frame renders a taller viewport to fill that box — which is also
  // truthful, since a desktop viewport does show more of a page at once.
  const viewportHeight = Math.round(height / scale)

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <p className="text-meta text-muted-foreground">
        {label} · {width}px
        {scale < 1
          ? ` · ${Math.round(scale * 100)}%, showing ${viewportHeight}px of page`
          : ""}
      </p>
      <div
        ref={holder}
        className="overflow-hidden rounded-md border bg-background"
        style={{ height }}
      >
        <iframe
          src={src}
          title={`${label} preview`}
          loading="lazy"
          className="block border-0"
          style={{
            width,
            height: viewportHeight,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        />
      </div>
    </div>
  )
}

export function BreakpointPreview({
  src,
  height = 700,
  defaultMode = "desktop",
  showGridToggle = true,
}: {
  src: string
  height?: number
  defaultMode?: Mode
  showGridToggle?: boolean
}) {
  const [mode, setMode] = React.useState<Mode>(defaultMode)
  const [grid, setGrid] = React.useState(false)

  // the overlay lives inside the previewed page, so it lines up with the
  // real container margins at every width instead of approximating them
  const frameSrc = grid ? `${src}?grid=1` : src

  const frames =
    mode === "compare"
      ? [PRESETS[0], PRESETS[2]]
      : PRESETS.filter((p) => p.id === mode)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {PRESETS.map((p) => (
          <Button
            key={p.id}
            size="sm"
            variant={mode === p.id ? "default" : "outline"}
            onClick={() => setMode(p.id)}
            aria-pressed={mode === p.id}
          >
            {p.label}
          </Button>
        ))}
        <Button
          size="sm"
          variant={mode === "compare" ? "default" : "outline"}
          onClick={() => setMode("compare")}
          aria-pressed={mode === "compare"}
        >
          Compare
        </Button>
        {showGridToggle ? (
          <Button
            size="sm"
            variant={grid ? "default" : "outline"}
            onClick={() => setGrid((g) => !g)}
            aria-pressed={grid}
          >
            Grid
          </Button>
        ) : null}
        <a
          href={frameSrc}
          className="ml-auto text-meta text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Open standalone
        </a>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:gap-4">
        {frames.map((f) => (
          <Frame
            key={`${f.id}-${grid}`}
            src={frameSrc}
            width={f.width}
            height={height}
            label={f.label}
          />
        ))}
      </div>
    </div>
  )
}
