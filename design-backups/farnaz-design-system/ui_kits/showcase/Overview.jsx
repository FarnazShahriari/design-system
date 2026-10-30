function Overview({ onNav }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
      <header style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p className="text-meta" style={{ textTransform: "uppercase", letterSpacing: "0.025em", color: "var(--muted-foreground)" }}>Style guide</p>
        <h1 className="text-display" style={{ maxWidth: "14ch" }}>Tokens, then components.</h1>
        <p className="text-lead" style={{ maxWidth: "62ch", color: "var(--muted-foreground)" }}>An open-source component library, retokenized against a restrained, near-monochrome palette and a tight, fluid type scale. Every value lives in one file — change it there and the whole system follows.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 8 }}>
          <Button pill onClick={() => onNav("foundations/colors")}>Start with foundations <Icon name="arrow-right" /></Button>
          <Button variant="outline" onClick={() => onNav("components/button")}>Open the playground</Button>
        </div>
      </header>
      <section className="sc-three">
        {[["01","One file owns the look","Colour, radius and type scale are named tokens in src/app/globals.css. No component hard-codes a value."],["02","You own every component","Component source lives in this repo, not in node_modules. Nothing upstream can change your UI overnight."],["03","Restraint is the style","Square corners, no shadows, two easing curves, one accent colour. The constraints are the design."]].map(([n,t,d]) => (
          <div key={n} style={{ display: "flex", flexDirection: "column", gap: 8 }}><p className="text-meta" style={{ color: "var(--muted-foreground)" }}>{n}</p><h2 className="text-h4">{t}</h2><p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{d}</p></div>
        ))}
      </section>
      <section style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {SECTIONS.map((s) => (
          <div key={s.slug} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}><h2 className="text-h3">{s.title}</h2><p className="text-sm" style={{ maxWidth: "62ch", color: "var(--muted-foreground)" }}>{s.description}</p></div>
            <ul style={{ display: "flex", flexWrap: "wrap", columnGap: 24, rowGap: 12, listStyle: "none", padding: 0 }}>
              {s.entries.map((e) => <li key={e.slug}><LinkUnderline href={"#" + s.slug + "/" + e.slug} className="text-sm" onClick={(ev) => { ev.preventDefault(); onNav(s.slug + "/" + e.slug); }}>{e.title}</LinkUnderline></li>)}
            </ul>
          </div>
        ))}
      </section>
      <section style={{ display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid var(--border)", paddingTop: 32 }}>
        <h2 className="text-h4">Where things live</h2>
        <dl className="sc-dl">
          {[["src/app/globals.css","Every token: colour, radius, type scale"],["src/components/ui/","Component source — yours to edit"],["src/showcase/","This style guide, driven by one registry"],["reference/clay-spec.md","The visual language this system draws from"],["CHECKLIST.md","What is built and what comes next"]].map(([p, d]) => <React.Fragment key={p}><dt><code className="text-meta">{p}</code></dt><dd style={{ color: "var(--muted-foreground)" }}>{d}</dd></React.Fragment>)}
        </dl>
      </section>
    </div>
  );
}
window.Overview = Overview;
