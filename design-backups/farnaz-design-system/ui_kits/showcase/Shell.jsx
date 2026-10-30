function NavList({ route, onNav }) {
  const item = (href, title) => {
    const active = route === href;
    return <li key={href}><a href={"#" + href} onClick={(e) => { e.preventDefault(); onNav(href); }} aria-current={active ? "page" : undefined} className="sc-nav-link" data-active={active}>{title}</a></li>;
  };
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <ul className="sc-nav-ul">{item("all", "Everything on one page")}</ul>
      {SECTIONS.map((s) => (
        <div key={s.slug} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <p className="text-meta" style={{ textTransform: "uppercase", letterSpacing: "0.025em", color: "var(--muted-foreground)" }}>{s.title}</p>
          <ul className="sc-nav-ul">{s.entries.map((e) => item(s.slug + "/" + e.slug, e.title))}</ul>
        </div>
      ))}
    </nav>
  );
}
function Shell({ route, onNav, dark, setDark, children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <header className="sc-header">
        <div className="sc-header-inner">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="sc-mobile" aria-label="Open navigation"><Icon name="menu" /></Button></SheetTrigger>
            <SheetContent side="left" style={{ width: 288, padding: 24, overflowY: "auto" }}><NavList route={route} onNav={(r) => { setOpen(false); onNav(r); }} /></SheetContent>
          </Sheet>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav(""); }} className="text-h4" style={{ letterSpacing: "-0.025em" }}>Design System</a>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label="Toggle light and dark theme" title="Toggle light and dark theme"><Icon name={dark ? "sun" : "moon"} /></Button>
          </div>
        </div>
      </header>
      <div className="sc-body">
        <div className="sc-sidebar"><div className="sc-sidebar-inner"><NavList route={route} onNav={onNav} /></div></div>
        <main style={{ minWidth: 0, flex: 1 }}>{children}</main>
      </div>
    </>
  );
}
Object.assign(window, { Shell, NavList });
