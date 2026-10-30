import * as React from "react";
import { cx, Icon, useDismiss } from "../core/Icon.jsx";

const RootCtx = React.createContext(null);
const ItemCtx = React.createContext(null);

export function NavigationMenu({ className, children, ...props }) {
  const [open, setOpen] = React.useState(null);
  const ref = React.useRef(null);
  useDismiss(open !== null, () => setOpen(null), ref);
  return <nav ref={ref} data-slot="navigation-menu" className={cx("ds-navmenu", className)} onMouseLeave={() => setOpen(null)} {...props}><RootCtx.Provider value={{ open, setOpen }}>{children}</RootCtx.Provider></nav>;
}
export function NavigationMenuList({ className, ...props }) { return <ul data-slot="navigation-menu-list" className={cx("ds-navmenu-list", className)} {...props} />; }
export function NavigationMenuItem({ value, className, children, ...props }) {
  const id = React.useId();
  const key = value || id;
  return <li data-slot="navigation-menu-item" className={cx("ds-navmenu-item", className)} {...props}><ItemCtx.Provider value={key}>{children}</ItemCtx.Provider></li>;
}
export function NavigationMenuTrigger({ className, children, ...props }) {
  const r = React.useContext(RootCtx);
  const k = React.useContext(ItemCtx);
  const on = r.open === k;
  return <button type="button" data-slot="navigation-menu-trigger" data-state={on ? "open" : "closed"} aria-expanded={on} className={cx("ds-navmenu-trigger", className)}
    onMouseEnter={() => r.setOpen(k)} onClick={() => r.setOpen(on ? null : k)} {...props}>{children}<Icon name="chevron-down" /></button>;
}
export function NavigationMenuContent({ className, ...props }) {
  const r = React.useContext(RootCtx);
  const k = React.useContext(ItemCtx);
  return r.open === k ? <div data-slot="navigation-menu-content" className={cx("ds-popover-surface ds-navmenu-content", className)} {...props} /> : null;
}
export function NavigationMenuLink({ className, active, ...props }) {
  return <a data-slot="navigation-menu-link" data-active={active} className={cx("ds-navmenu-link", className)} {...props} />;
}
