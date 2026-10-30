function CaseStudy({ slug, onNav }) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[i < 0 ? 0 : i];
  const next = PROJECTS[((i < 0 ? 0 : i) + 1) % PROJECTS.length];
  return (
    <main>
      <Section theme="light" rhythm="lg">
        <Container>
          <h1 className="text-display" style={{ maxWidth: "24ch" }}>{project.title}</h1>
          <Reveal delay={0.1}><p className="text-lead" style={{ marginTop: 24, maxWidth: "52ch", color: "var(--muted-foreground)" }}>{project.lead}</p></Reveal>
        </Container>
      </Section>
      <Section theme="light" rhythm="none"><Reveal variant="fade"><Media ratio="21 / 9" label="Full-bleed hero media" /></Reveal></Section>
      <Section theme="light">
        <Container>
          <div className="cs-split">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p>{project.title} came to us with a product that had accumulated years of features and no remaining point of view. Every screen was reachable from every other screen, and nothing was reachable quickly.</p>
              <p style={{ color: "var(--muted-foreground)" }}>We began by watching what people did rather than what the navigation offered. Two tasks accounted for most sessions, and everything else was noise around them.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p className="text-meta" style={{ color: "var(--muted-foreground)" }}>Services</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 4, fontWeight: 700 }}>{project.services.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <LinkUnderline href="#work" onClick={(e) => { e.preventDefault(); onNav("work"); }} style={{ width: "fit-content" }}>Back to all work</LinkUnderline>
            </div>
          </div>
        </Container>
      </Section>
      <Section theme="muted">
        <Container>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 className="text-h2" style={{ maxWidth: "18ch" }}>Designing for everyday clarity</h2>
            <p style={{ maxWidth: "46ch", color: "var(--muted-foreground)" }}>The home screen answers one question before anything else, and defers everything that is not that question.</p>
          </div>
          <div className="cs-two">
            <Reveal><Media ratio="4 / 5" label="Primary screen" /></Reveal>
            <Reveal delay={0.08}><Media ratio="4 / 5" label="Secondary flow" /></Reveal>
          </div>
        </Container>
      </Section>
      <Divider theme="muted" />
      <Section theme="dark">
        <Container>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 className="text-h2" style={{ maxWidth: "20ch" }}>One system, two platforms, no forks</h2>
            <p style={{ maxWidth: "46ch", color: "var(--muted-foreground)" }}>Every component was specified once and built twice, from a single set of tokens the two platform teams shared.</p>
          </div>
          <div style={{ marginTop: 40 }}><Reveal><Media ratio="16 / 9" label="Component library" /></Reveal></div>
        </Container>
      </Section>
      <Section theme="accent" rhythm="lg">
        <Container>
          <p className="text-meta" style={{ color: "var(--muted-foreground)" }}>Next case study</p>
          <a href={"#case/" + next.slug} onClick={(e) => { e.preventDefault(); onNav("case/" + next.slug); }} className="cs-next">
            <h2 className="text-h1">{next.title}</h2>
            <Icon name="arrow-right" className="cs-next-arrow" />
          </a>
        </Container>
      </Section>
      <Footer onNav={onNav} />
    </main>
  );
}
window.CaseStudy = CaseStudy;
