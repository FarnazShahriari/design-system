import type { Entry } from "@/showcase/types"

const colorPairs = [
  { name: "background / foreground", bg: "bg-background", fg: "text-foreground", border: true },
  { name: "primary", bg: "bg-primary", fg: "text-primary-foreground" },
  { name: "secondary", bg: "bg-secondary", fg: "text-secondary-foreground", border: true },
  { name: "muted", bg: "bg-muted", fg: "text-muted-foreground", border: true },
  { name: "accent", bg: "bg-accent", fg: "text-accent-foreground" },
  { name: "card", bg: "bg-card", fg: "text-card-foreground", border: true },
  { name: "popover", bg: "bg-popover", fg: "text-popover-foreground", border: true },
  { name: "destructive", bg: "bg-destructive", fg: "text-destructive-foreground" },
]

const typeScale = [
  { cls: "text-display", name: "text-display", role: "Statement", usage: "ExtraBold 800, 56–96px. One per view, at most." },
  { cls: "text-h1", name: "text-h1", role: "Statement", usage: "ExtraBold 800, 48–72px. The page title." },
  { cls: "text-h2", name: "text-h2", role: "Heading", usage: "Bold 700, 24–32px. Section titles." },
  { cls: "text-h3", name: "text-h3", role: "Heading", usage: "Bold 700, 20–26px. Sub-sections and card titles." },
  { cls: "text-h4", name: "text-h4", role: "Heading", usage: "Bold 700, 20–22px. The smallest heading." },
  { cls: "text-lead", name: "text-lead", role: "Body", usage: "Regular 400, 20–26px. Opening paragraph." },
  { cls: "text-body", name: "text-body", role: "Body", usage: "Regular 400, 17–18px at 1.6. The default for copy." },
  { cls: "text-label", name: "text-label", role: "Label", usage: "Medium 500, 13px, uppercase, +10% tracking." },
  { cls: "text-meta", name: "text-meta", role: "Label", usage: "The same metrics without the uppercasing." },
]

const spacingSteps = [4, 8, 12, 16, 24, 32, 48, 64, 80, 120]

const easings = [
  {
    name: "--ease-out-expo",
    value: "cubic-bezier(0.16, 1, 0.3, 1)",
    usage: "The default. Anything the user triggered — hover, click, open.",
    duration: "200–550ms",
  },
  {
    name: "--ease-out",
    value: "cubic-bezier(0.19, 1, 0.22, 1)",
    usage: "Large surfaces the page itself moves — panels, reveals, transitions.",
    duration: "650–1500ms",
  },
]

export const foundations: Entry[] = [
  {
    slug: "colors",
    title: "Color",
    description:
      "Paper, black, a line grey, and one green point. 80% calm paper, 20% bold black, and colour capped at about 2% of any view. Every value lives in the package\u2019s theme.css; components only ever reference the token name.",
    examples: [
      {
        label: "Semantic pairs",
        note: "Each swatch shows a background with its matching foreground on top. Always use them as a pair — that is what guarantees contrast when the theme changes.",
        node: (
          <div className="grid gap-3 sm:grid-cols-2">
            {colorPairs.map((c) => (
              <div
                key={c.name}
                className={`flex h-24 flex-col justify-between rounded-md p-4 ${c.bg} ${c.fg} ${
                  c.border ? "border" : ""
                }`}
              >
                <span className="text-meta opacity-70">{c.name}</span>
                <span className="text-sm">The quick brown fox</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        label: "The interaction surface",
        note: "--accent is not a brand colour, whatever its name suggests. In this component library 37 of its 39 uses are focus:, hover: and data-[state=open]: backgrounds on menu items, options and toggles. It is a step down the paper ramp, which is what a hover state should be — give it a saturated colour and every dropdown hover becomes a block of it.",
        node: (
          <div className="flex flex-wrap items-center gap-4">
            <div className="size-20 rounded-md bg-accent" />
            <p className="max-w-[46ch] text-sm text-muted-foreground">
              Barely separated from the ground on purpose: 1.19:1. It has to be
              visible as a state change without becoming a shape of its own.
            </p>
          </div>
        ),
      },
      {
        label: "The point",
        note: "The brand\u2019s only actual colour, and the only token with a hard budget: about 2% of a view. It marks where you are \u2014 the dot on the timeline \u2014 and does nothing else. At 3.51:1 on paper it clears the 3:1 a non-text mark needs and deliberately misses the 4.5:1 text needs, which is the same thing the brand means by \u201cnever coloured text for important information\u201d.",
        node: (
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="block h-px w-40 bg-border" />
              <span className="block size-2.5 rounded-pill bg-point" />
              <span className="block h-px w-16 bg-border" />
            </div>
            <p className="max-w-[40ch] text-sm text-muted-foreground">
              There is no accent section theme. A band of this would be ~100% of
              a view, which is the one thing the budget forbids.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    slug: "typography",
    title: "Typography",
    description:
      "Inter, with weight. Four roles and no more: statements shout in ExtraBold, headings are Bold and deliberately much smaller, body is Regular at a readable 17–18px, labels are uppercase and never below 12px. The signature is negative letter-spacing that tightens as size grows — set once per step, so you never hand-tune tracking again.",
    examples: [
      {
        label: "The scale",
        note: "Each step carries its own line-height, letter-spacing and weight, so `text-h1` is all you ever write. `text-label` is the one exception that is a utility rather than a font-size token: a Tailwind type token cannot carry `text-transform`, so the uppercasing would otherwise be lost every time.",
        node: (
          <div className="space-y-6">
            {typeScale.map((t) => (
              <div key={t.name} className="border-b pb-5 last:border-b-0">
                <p className={t.cls}>Design is how it works</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <code className="text-meta text-muted-foreground">{t.name}</code>
                  <span className="text-label text-muted-foreground">{t.role}</span>
                  <span className="text-meta text-muted-foreground">{t.usage}</span>
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        label: "Measure",
        note: "Body copy is capped around 60–70 characters. Long lines are the one thing this layout cannot rescue.",
        node: (
          <p className="max-w-[62ch] text-base text-muted-foreground">
            Lead with the outcome, then explain the mechanism. One idea per
            sentence, one argument per paragraph, two to four sentences per
            paragraph. If a paragraph runs longer than that, it is usually two
            paragraphs that have not been separated yet.
          </p>
        ),
      },
    ],
  },
  {
    slug: "spacing",
    title: "Spacing & layout",
    description:
      "A short, named set of steps rather than an open-ended scale. Picking from ten options keeps a system coherent; picking from forty does not.",
    examples: [
      {
        label: "The step set",
        note: "These map onto Tailwind's default scale (4px = 1, 8px = 2, 16px = 4 …), so no config override was needed — just discipline about which ones you reach for.",
        node: (
          <div className="space-y-2">
            {spacingSteps.map((s) => (
              <div key={s} className="flex items-center gap-4">
                <code className="w-16 shrink-0 text-meta text-muted-foreground">
                  {s}px
                </code>
                <div className="h-4 bg-accent" style={{ width: `${s}px` }} />
              </div>
            ))}
          </div>
        ),
      },
      {
        label: "Container",
        note: "One container primitive, centred with a max width and responsive side margins. Every page uses it; nothing defines its own.",
        node: (
          <div className="rounded-md border border-dashed p-4">
            <div className="mx-auto max-w-2xl rounded-md bg-muted p-6 text-center text-sm text-muted-foreground">
              max-width container
            </div>
          </div>
        ),
      },
    ],
  },
  {
    slug: "shape",
    title: "Shape & elevation",
    description:
      "Square by default, pills by exception, and no shadows anywhere. Depth comes from color blocks and overlap instead — which is why every overlay in this system is defined by a border and a solid surface, not a drop shadow.",
    examples: [
      {
        label: "Radius",
        node: (
          <div className="flex flex-wrap items-end gap-6">
            {[
              { cls: "rounded-none", label: "rounded-none" },
              { cls: "rounded-sm", label: "rounded-sm" },
              { cls: "rounded-md", label: "rounded-md (default)" },
              { cls: "rounded-lg", label: "rounded-lg" },
              { cls: "rounded-pill", label: "rounded-pill" },
            ].map((r) => (
              <div key={r.label} className="space-y-2">
                <div className={`h-16 w-24 bg-primary ${r.cls}`} />
                <code className="block text-meta text-muted-foreground">
                  {r.label}
                </code>
              </div>
            ))}
          </div>
        ),
      },
      {
        label: "No shadows",
        note: "Every shadow utility was stripped from the component sources. An overlay separates itself with a border and an opaque surface.",
        node: (
          <div className="flex flex-wrap gap-4">
            <div className="w-56 rounded-md border bg-popover p-4 text-sm text-popover-foreground">
              A floating surface. Border + opaque background, no shadow.
            </div>
            <div className="w-56 rounded-md bg-accent p-4 text-sm text-accent-foreground">
              Or a color block, which needs no border at all.
            </div>
          </div>
        ),
      },
    ],
  },
  {
    slug: "motion",
    title: "Motion",
    description:
      "Two easing curves, both exponential-out. Nothing overshoots, nothing bounces, and there is no ease-in-out anywhere. Motion decelerates hard and settles — the feel is calm confidence, not playfulness.",
    examples: [
      {
        label: "Easing tokens",
        node: (
          <div className="space-y-4">
            {easings.map((e) => (
              <div key={e.name} className="rounded-md border p-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <code className="text-sm">{e.name}</code>
                  <code className="text-meta text-muted-foreground">{e.value}</code>
                  <span className="text-meta text-muted-foreground">
                    {e.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{e.usage}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        label: "The rule of thumb",
        note: "User-initiated motion is short and immediate. Page-initiated motion is long and unhurried. Mixing the two is what makes an interface feel sluggish or twitchy.",
        node: (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border p-4">
              <p className="text-h4">User did it</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Hover, click, focus. 200–550ms. It must feel like a response.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <p className="text-h4">Page did it</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Reveals, panels, transitions. 650–1500ms. It must feel composed.
              </p>
            </div>
          </div>
        ),
      },
      {
        label: "Reduced motion",
        note: "Every animated primitive must degrade under prefers-reduced-motion: keep opacity fades, drop transforms entirely.",
        node: (
          <p className="max-w-[60ch] text-sm text-muted-foreground">
            This is a hard requirement, not a nicety — vestibular disorders make
            large transform-based motion genuinely unpleasant. The underline link
            on the Navigation page already honours it.
          </p>
        ),
      },
    ],
  },
]
