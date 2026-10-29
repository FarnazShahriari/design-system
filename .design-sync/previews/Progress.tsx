import { Label, Progress } from "@farnazshahriari/design-system"

/** Project stages, each labelled with its own figure. */
export const Stages = () => (
  <div className="flex w-80 flex-col gap-5">
    {[
      { id: "pr-disc", label: "Discovery", value: 100 },
      { id: "pr-design", label: "Design", value: 64 },
      { id: "pr-build", label: "Build", value: 18 },
    ].map((s) => (
      <div key={s.id} className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <Label htmlFor={s.id} className="text-muted-foreground"><span className="text-label">{s.label}</span></Label>
          <span className="text-meta tabular-nums">{s.value}%</span>
        </div>
        <Progress id={s.id} value={s.value} />
      </div>
    ))}
  </div>
)

/** The two ends of the scale, so empty and full are both legible. */
export const Edges = () => (
  <div className="flex w-80 flex-col gap-5">
    <div className="flex flex-col gap-2">
      <Label htmlFor="pr-zero" className="text-muted-foreground"><span className="text-label">Not started</span></Label>
      <Progress id="pr-zero" value={0} />
      <p className="text-meta text-muted-foreground">
        The empty track still reads as a track.
      </p>
    </div>
    <div className="flex flex-col gap-2">
      <Label htmlFor="pr-full" className="text-muted-foreground"><span className="text-label">Complete</span></Label>
      <Progress id="pr-full" value={100} />
      <p className="text-meta text-muted-foreground">
        Full is the bold black, edge to edge.
      </p>
    </div>
  </div>
)

/** A thicker track, for the one place on a page that carries the summary. */
export const Prominent = () => (
  <div className="flex w-96 flex-col gap-3">
    <p className="text-h4">Northwind Rail rebuild</p>
    <Progress value={72} className="h-3" />
    <div className="text-meta flex justify-between text-muted-foreground">
      <span>Week 9 of 12</span>
      <span className="tabular-nums">72%</span>
    </div>
  </div>
)
