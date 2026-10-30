function About({ onNav }) {
  const go = (e) => { e.preventDefault(); onNav("work"); };
  return (
    <main>
      <Section theme="light" rhythm="lg">
        <Container width="narrow">
          <h1 className="text-h1">About</h1>
          <p className="text-lead" style={{ marginTop: 24, color: "var(--muted-foreground)" }}>We are a small studio that designs digital products and the systems that keep them coherent.</p>
        </Container>
      </Section>
      <Section theme="light" rhythm="none">
        <Container width="narrow">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p>Most of our work starts after something has already been built. A product has grown past the decisions it was founded on, and the team can feel it in every new feature that takes longer than the last one.</p>
            <p>We are useful at that point because we treat the system and the surface as one problem. A component library that nobody enjoys using is not a design system; it is a tax.</p>
            <h2 className="text-h3" style={{ marginTop: 24 }}>How we work</h2>
            <p>We work in small teams, directly with the people who will own the result. There is no account layer, and no handover document that tries to substitute for having been in the room.</p>
            <h2 className="text-h3" style={{ marginTop: 24 }}>Getting in touch</h2>
            <p style={{ color: "var(--muted-foreground)" }}>We take on a handful of projects a year, and we are usually booking two to three months out.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}><span className="text-meta" style={{ color: "var(--muted-foreground)" }}>Become a client</span><LinkUnderline href="#work" onClick={go} style={{ width: "fit-content" }}>hello@example.com</LinkUnderline></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}><span className="text-meta" style={{ color: "var(--muted-foreground)" }}>Join us</span><LinkUnderline href="#work" onClick={go} style={{ width: "fit-content" }}>See open positions</LinkUnderline></div>
            </div>
          </div>
        </Container>
      </Section>
      <Section theme="muted" rhythm="default" style={{ marginTop: 64 }}>
        <Container width="narrow"><p className="text-h3">Let’s talk</p></Container>
      </Section>
    </main>
  );
}
window.About = About;
