import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@farnazshahriari/design-system"

/**
 * The default list is a muted track with the active tab lifted onto the page
 * ground. `defaultValue` is what keeps a panel open in a static shot.
 */
export const Default = () => (
  <Tabs defaultValue="discovery" className="max-w-[60ch]">
    <TabsList>
      <TabsTrigger value="discovery">Discovery</TabsTrigger>
      <TabsTrigger value="blueprint">Blueprint</TabsTrigger>
      <TabsTrigger value="interface">Interface</TabsTrigger>
      <TabsTrigger value="handover">Handover</TabsTrigger>
    </TabsList>
    <TabsContent value="discovery">
      <p className="text-body text-muted-foreground pt-4">
        Twelve ride-alongs across three Meridian depots, then a fortnight of
        synthesis. Nothing was designed in this phase.
      </p>
    </TabsContent>
    <TabsContent value="blueprint">
      <p className="text-body text-muted-foreground pt-4">
        One service blueprint, agreed with operations before any interface work
        began.
      </p>
    </TabsContent>
    <TabsContent value="interface">
      <p className="text-body text-muted-foreground pt-4">
        Eleven screens, down from six hundred, each carrying a single decision.
      </p>
    </TabsContent>
    <TabsContent value="handover">
      <p className="text-body text-muted-foreground pt-4">
        Component source, a token set and a written contribution process.
      </p>
    </TabsContent>
  </Tabs>
)

/** `variant="line"` drops the track and marks the active tab with a rule. */
export const Line = () => (
  <Tabs defaultValue="northwind" className="max-w-[60ch]">
    <TabsList variant="line">
      <TabsTrigger value="northwind">Northwind</TabsTrigger>
      <TabsTrigger value="meridian">Meridian</TabsTrigger>
      <TabsTrigger value="atlas">Atlas</TabsTrigger>
    </TabsList>
    <TabsContent value="northwind">
      <p className="text-body text-muted-foreground pt-6">
        Retail banking, 2026. Account opening rebuilt around one decision per
        step; the support queue halved in the first quarter.
      </p>
    </TabsContent>
    <TabsContent value="meridian">
      <p className="text-body text-muted-foreground pt-6">
        Logistics, 2025. A depot planner for 1,400 drivers across nine regions.
      </p>
    </TabsContent>
    <TabsContent value="atlas">
      <p className="text-body text-muted-foreground pt-6">
        Public sector, 2025. A benefits claim that reads at a ninth-grade level.
      </p>
    </TabsContent>
  </Tabs>
)

/** Vertical orientation moves the list beside the panel and the rule to its edge. */
export const Vertical = () => (
  <Tabs
    orientation="vertical"
    defaultValue="research"
    className="max-w-[60ch]"
  >
    <TabsList variant="line">
      <TabsTrigger value="research">Research</TabsTrigger>
      <TabsTrigger value="service">Service design</TabsTrigger>
      <TabsTrigger value="systems">Design systems</TabsTrigger>
    </TabsList>
    <TabsContent value="research">
      <p className="text-body text-muted-foreground pl-4">
        Contextual interviews, ride-alongs and diary studies. Findings are
        written up as decisions, not observations.
      </p>
    </TabsContent>
    <TabsContent value="service">
      <p className="text-body text-muted-foreground pl-4">
        Blueprints that name the back-stage work, because that is usually where
        the queue is.
      </p>
    </TabsContent>
    <TabsContent value="systems">
      <p className="text-body text-muted-foreground pl-4">
        Forty components, a token set and a contribution process the team can
        actually follow.
      </p>
    </TabsContent>
  </Tabs>
)
