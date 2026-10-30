const ENTRY_ACTIONS = [
  { slug: "button", title: "Button", origin: "modified", originNote: "Stock shadcn button with the shadow-xs removed from the outline variant, per the no-shadows rule.",
    description: "The system is deliberately light on buttons — most actions are text links. Reach for a button when something is a genuine commitment, and use the pill for the single primary action on a page.",
    examples: [
      { label: "Variants", node: () => <div className="sc-row"><Button>Default</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="link">Link</Button><Button variant="destructive">Destructive</Button></div> },
      { label: "The pill", note: "rounded-pill is the one exception to the square-by-default rule. Use it for the primary call to action — and only one per page.", node: () => <div className="sc-row"><Button pill>Start a project</Button><Button pill variant="outline">Secondary pill</Button></div> },
      { label: "Sizes", node: () => <div className="sc-row"><Button size="xs">Extra small</Button><Button size="sm">Small</Button><Button>Default</Button><Button size="lg">Large</Button><Button size="icon" aria-label="Add"><Icon name="plus" /></Button></div> },
      { label: "With icons", node: () => <div className="sc-row"><Button>View case study <Icon name="arrow-right" /></Button><Button variant="outline"><Icon name="plus" /> Add item</Button><Button disabled>Disabled</Button></div> },
    ] },
  { slug: "button-group", title: "Button group", origin: "restyled", description: "Related actions bound into one unit, sharing edges.",
    examples: [{ label: "Grouped", node: () => <ButtonGroup><Button variant="outline">Week</Button><Button variant="outline">Month</Button><Button variant="outline">Year</Button></ButtonGroup> }] },
  { slug: "toggle", title: "Toggle", origin: "restyled", description: "A button with an on state. Use for formatting-style controls, not for settings — a switch is clearer for those.",
    examples: [
      { label: "Single", node: () => <div className="sc-row"><Toggle aria-label="Bold"><Icon name="bold" /></Toggle><Toggle variant="outline" aria-label="Italic"><Icon name="italic" /></Toggle><Toggle defaultPressed aria-label="Underline"><Icon name="underline" /></Toggle></div> },
      { label: "Group", node: () => <ToggleGroup type="multiple" variant="outline"><ToggleGroupItem value="bold"><Icon name="bold" /></ToggleGroupItem><ToggleGroupItem value="italic"><Icon name="italic" /></ToggleGroupItem><ToggleGroupItem value="underline"><Icon name="underline" /></ToggleGroupItem></ToggleGroup> },
    ] },
];
const SWATCH_PAIRS = [["background","foreground"],["primary","primary-foreground"],["secondary","secondary-foreground"],["muted","muted-foreground"],["accent","accent-foreground"],["destructive","destructive-foreground"]];
const ENTRY_FOUNDATIONS = [
  { slug: "colors", title: "Colours", description: "The palette and how the token pairs work.",
    examples: [
      { label: "Pairs", note: "Colour tokens come in pairs — bg-primary with text-primary-foreground. Using a pair is what guarantees contrast survives a theme change.",
        node: () => <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12 }}>{SWATCH_PAIRS.map(([b, f]) => <div key={b} style={{ background: "var(--" + b + ")", color: "var(--" + f + ")", border: "1px solid var(--border)", padding: 16, minHeight: 96, display: "flex", flexDirection: "column", justifyContent: "space-between" }}><span className="text-h4">Aa</span><code className="text-xs">--{b}</code></div>)}</div> },
      { label: "Section themes", node: () => <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))" }}>{["light","muted","dark","accent"].map((t) => <Section key={t} theme={t} rhythm="none" style={{ padding: 16, minHeight: 120 }}><p className="text-h4">{t}</p><p className="text-sm" style={{ color: "var(--muted-foreground)", marginTop: 4 }}>Muted caption</p><Button size="sm" pill style={{ marginTop: 12 }}>Pill</Button></Section>)}</div> },
    ] },
  { slug: "typography", title: "Typography", description: "Inter at two weights. Negative tracking that scales with size is the signature move.",
    examples: [{ label: "Scale", node: () => <div style={{ display: "grid", gap: 12 }}>{["display","h1","h2","h3","h4","lead","meta"].map((c) => <div key={c} style={{ display: "flex", gap: 16, alignItems: "baseline" }}><code className="text-xs" style={{ width: 90, flexShrink: 0, color: "var(--muted-foreground)" }}>text-{c}</code><span className={"text-" + c} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Northwind</span></div>)}</div> }] },
  { slug: "motion", title: "Motion", description: "The two easing curves and when each applies.",
    examples: [{ label: "Reveal", note: "Fade 0.9s, rise 16px over 1.2s, both ease-out-expo. Fires once.", node: () => <Reveal><div className="text-h3">Settles, never bounces.</div></Reveal> }] },
];
const SECTIONS = [
  { slug: "foundations", title: "Foundations", description: "The decisions everything else inherits: colour, type, spacing, shape and motion.", entries: ENTRY_FOUNDATIONS },
  { slug: "components", title: "Components", description: "Every component in the system, grouped by what it does. Each one notes whether it is stock, modified, or written for this system.", entries: ENTRY_ACTIONS },
];
window.SECTIONS = SECTIONS;
