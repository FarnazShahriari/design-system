"use client"

import * as React from "react"

import { Reveal } from "@farnazshahriari/design-system/motion/reveal"
import { Button } from "@farnazshahriari/design-system/ui/button"

const RECIPES = [
  { v: "fade" as const, label: "fade", note: "opacity only" },
  { v: "rise" as const, label: "rise", note: "position only" },
  { v: "rise-fade" as const, label: "rise-fade", note: "both, staggered durations" },
]

/**
 * Reveals fire once on entry, which is correct behaviour and useless for a
 * demo — so remounting the subtree with a key is how you watch it again.
 */
export function MotionDemo() {
  const [run, setRun] = React.useState(0)

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-3" key={run}>
        {RECIPES.map((r) => (
          <Reveal key={r.v} variant={r.v}>
            <div className="flex h-32 flex-col justify-between rounded-md bg-muted p-4">
              <code className="text-meta">{r.label}</code>
              <span className="text-meta text-muted-foreground">{r.note}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <Button variant="outline" size="sm" className="w-fit" onClick={() => setRun((n) => n + 1)}>
        Replay
      </Button>
    </div>
  )
}
