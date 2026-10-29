import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@farnazshahriari/design-system"

/**
 * The whole compound, in order: header, title, description, action, content,
 * footer. The heading element sits INSIDE CardTitle rather than on it —
 * CardTitle declares `leading-none`, so a type token applied to it keeps the
 * font-size and silently drops the line-height that travels with the token.
 */
export const Full = () => (
  <Card className="max-w-xl">
    <CardHeader className="border-b">
      <CardTitle>
        <h3 className="text-h4">Northwind</h3>
      </CardTitle>
      <CardDescription>Retail banking · 2026 · Service design</CardDescription>
      <CardAction>
        <Badge variant="outline">In review</Badge>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p className="text-body text-muted-foreground max-w-[60ch]">
        Six hundred screens became eleven. Account opening was rebuilt around
        one decision per step, and the support queue halved in the first
        quarter after launch.
      </p>
    </CardContent>
    <CardFooter className="border-t justify-between">
      <span className="text-meta text-muted-foreground">Eleven screens</span>
      <Button variant="outline">Read the case study</Button>
    </CardFooter>
  </Card>
)

/**
 * CardAction is what switches CardHeader to a two-column grid, so the action
 * sits beside a title and description of any length without being nudged.
 */
export const WithAction = () => (
  <Card className="max-w-xl">
    <CardHeader>
      <CardTitle>
        <h3 className="text-h4">Meridian</h3>
      </CardTitle>
      <CardDescription>
        Logistics · 2025 · Research, interaction design and handover
      </CardDescription>
      <CardAction>
        <Button variant="outline">Share</Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p className="text-body text-muted-foreground max-w-[60ch]">
        A depot planner for 1,400 drivers. Twelve weeks of ride-alongs decided
        the information order; nothing was designed before the third week.
      </p>
    </CardContent>
  </Card>
)

/** The quiet form: header and content only, carrying a single figure. */
export const Stat = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>
        <h3 className="text-h4">Support queue</h3>
      </CardTitle>
      <CardDescription>Northwind, first quarter after launch</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-h2">−52%</p>
      <p className="text-meta text-muted-foreground mt-1">
        Measured against the twelve weeks before release.
      </p>
    </CardContent>
  </Card>
)

/** Cards tile to equal height on a work index, each one a project. */
export const Tiled = () => (
  <div className="flex gap-4 items-stretch">
    {[
      {
        name: "Northwind",
        meta: "Retail banking · 2026",
        body: "Account opening, rebuilt around one decision per step.",
      },
      {
        name: "Meridian",
        meta: "Logistics · 2025",
        body: "A depot planner for 1,400 drivers across nine regions.",
      },
      {
        name: "Atlas",
        meta: "Public sector · 2025",
        body: "A benefits claim that reads at a ninth-grade level.",
      },
    ].map((p) => (
      <Card key={p.name} className="flex-1">
        <CardHeader>
          <CardTitle>
            <h3 className="text-h4">{p.name}</h3>
          </CardTitle>
          <CardDescription>{p.meta}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-body text-muted-foreground">{p.body}</p>
        </CardContent>
        <CardFooter className="border-t">
          <span className="text-meta text-muted-foreground">Case study</span>
        </CardFooter>
      </Card>
    ))}
  </div>
)
