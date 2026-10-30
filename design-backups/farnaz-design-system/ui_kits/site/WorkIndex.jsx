function WorkIndex({ onNav }) {
  const [filter, setFilter] = React.useState(null);
  const list = PROJECTS.filter((p) => !filter || p.tags.includes(filter));
  return (
    <main>
      <Section theme="light" rhythm="lg">
        <Container>
          <div className="wi-hero">
            <Reveal><h1 className="text-display" style={{ maxWidth: "16ch" }}>Work we can show you.</h1></Reveal>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8, listStyle: "none", padding: 0, minWidth: 208 }}>
              {FILTERS.map((f) => {
                const active = f.tag === filter;
                const count = PROJECTS.filter((p) => !f.tag || p.tags.includes(f.tag)).length;
                return (
                  <li key={f.label}>
                    <a href="#" onClick={(e) => { e.preventDefault(); setFilter(f.tag); }} className="text-sm wi-filter" data-active={active}>
                      <span aria-hidden="true" style={{ width: 6, height: 6, flexShrink: 0, transform: "translateY(-2px)", borderRadius: 999, background: active ? "var(--foreground)" : "transparent" }} />
                      {f.label}<sup className="text-meta" style={{ color: "var(--muted-foreground)" }}>{count}</sup>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Section>
      <Section theme="light" rhythm="none" className="wi-grid-section">
        <Container>
          <ProjectGrid stagger>
            {list.map((p) => <ProjectCard key={p.slug} href={"#case/" + p.slug} onClick={(e) => { e.preventDefault(); onNav("case/" + p.slug); }} title={p.title} description={p.description} tags={p.tags} />)}
          </ProjectGrid>
        </Container>
      </Section>
      <Footer onNav={onNav} />
    </main>
  );
}
window.WorkIndex = WorkIndex;
