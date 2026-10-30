const ORIGIN_LABEL = { restyled: "Stock component, themed by tokens", modified: "Component source modified", custom: "Written for this system" };
function EntryPage({ section, entry }) {
  return (
    <article style={{ maxWidth: 896, display: "flex", flexDirection: "column", gap: 48 }}>
      <header style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <p className="text-meta" style={{ textTransform: "uppercase", letterSpacing: "0.025em", color: "var(--muted-foreground)" }}>{section.title}</p>
        <h1 className="text-h1">{entry.title}</h1>
        <p className="text-lead" style={{ maxWidth: "64ch", color: "var(--muted-foreground)" }}>{entry.description}</p>
        {entry.origin ? <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, paddingTop: 4 }}><Badge variant={entry.origin === "custom" ? "default" : "outline"}>{ORIGIN_LABEL[entry.origin]}</Badge>{entry.originNote ? <p className="text-meta" style={{ color: "var(--muted-foreground)" }}>{entry.originNote}</p> : null}</div> : null}
      </header>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {entry.examples.map((ex) => (
          <section key={ex.label} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}><h2 className="text-h4">{ex.label}</h2>{ex.note ? <p className="text-sm" style={{ maxWidth: "64ch", color: "var(--muted-foreground)" }}>{ex.note}</p> : null}</div>
            <div className="sc-example">{ex.node()}</div>
          </section>
        ))}
      </div>
    </article>
  );
}
function AllPage() {
  return <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>{SECTIONS.flatMap((s) => s.entries.map((e) => <EntryPage key={s.slug + e.slug} section={s} entry={e} />))}</div>;
}
Object.assign(window, { EntryPage, AllPage });
