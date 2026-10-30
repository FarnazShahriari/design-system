function Media({ ratio = "16 / 9", label }) {
  return <div className="text-meta" style={{ width: "100%", aspectRatio: ratio, background: "var(--muted)", color: "var(--muted-foreground)", display: "flex", alignItems: "center", justifyContent: "center" }}>{label}</div>;
}
function Footer({ onNav, theme = "dark" }) {
  return (
    <Section theme={theme} rhythm="sm">
      <Container><div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <p className="text-h3">Let’s talk</p>
        <LinkUnderline href="#about" onClick={(e) => { e.preventDefault(); onNav("about"); }}>hello@example.com</LinkUnderline>
      </div></Container>
    </Section>
  );
}
Object.assign(window, { Media, Footer });
