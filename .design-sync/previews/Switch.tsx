import { Label, Switch } from "@farnazshahriari/design-system"

/** A settings list: label left, switch right, state carried by the track. */
export const Preferences = () => (
  <div className="flex w-96 flex-col gap-5">
    <div className="flex items-start justify-between gap-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="sw-avail">
          Available for new work
        </Label>
        <p className="text-meta text-muted-foreground">
          Shows the contact form on every page.
        </p>
      </div>
      <Switch id="sw-avail" defaultChecked />
    </div>
    <div className="flex items-start justify-between gap-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="sw-case">
          Quarterly case study
        </Label>
        <p className="text-meta text-muted-foreground">
          One email every three months. No other mail.
        </p>
      </div>
      <Switch id="sw-case" />
    </div>
    <div className="flex items-start justify-between gap-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="sw-speak">
          Open to speaking
        </Label>
        <p className="text-meta text-muted-foreground">
          Conferences and studio talks.
        </p>
      </div>
      <Switch id="sw-speak" defaultChecked />
    </div>
  </div>
)

/**
 * Both sizes. The step is deliberately small — the switch is a control, not a
 * graphic — so each row names the prop that produced it.
 */
export const Sizes = () => (
  <div className="flex w-80 flex-col gap-4">
    <div className="flex items-center gap-3">
      <Switch id="sw-default" defaultChecked />
      <Label htmlFor="sw-default">
        Default
        <span className="text-meta text-muted-foreground">size=&quot;default&quot;</span>
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Switch id="sw-sm" size="sm" defaultChecked />
      <Label htmlFor="sw-sm">
        Small
        <span className="text-meta text-muted-foreground">size=&quot;sm&quot;</span>
      </Label>
    </div>
    <p className="text-meta text-muted-foreground">
      Small is for dense rows and tables, never for a form.
    </p>
  </div>
)

/** Every statically renderable state, labelled. */
export const States = () => (
  <div className="flex w-80 flex-col gap-4">
    <div className="flex items-center gap-3">
      <Switch id="sw-off" />
      <Label htmlFor="sw-off">
        Off
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Switch id="sw-on" defaultChecked />
      <Label htmlFor="sw-on">
        On
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Switch id="sw-off-d" disabled />
      <Label htmlFor="sw-off-d">
        Off and disabled
      </Label>
    </div>
    <div className="flex items-center gap-3">
      <Switch id="sw-on-d" disabled defaultChecked />
      <Label htmlFor="sw-on-d">
        On and disabled
      </Label>
    </div>
  </div>
)
