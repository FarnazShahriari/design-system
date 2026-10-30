import * as React from "react";
import { cx, useDismiss } from "../core/Icon.jsx";

const RootCtx = React.createContext(null);
const MenuCtx = React.createContext(null);

export function Menubar({ className, children, ...props }) {
  const [open, setOpen] = React.useState(null);
  const ref = React.useRef(null);
  useDismiss(open !== null, () => setOpen(null), ref);
  return <div ref={ref} role="menubar" data-slot="menubar" className={cx("ds-menubar", className)} {...props}><RootCtx.Provider value={{ open, setOpen }}>{children}</RootCtx.Provider></div>;
}
export function MenubarMenu({ value, children }) {
  const id = React.useId();
  return <div className="ds-menubar-menu" data-slot="menubar-menu"><MenuCtx.Provider value={value || id}>{children}</MenuCtx.Provider></div>;
}
export function MenubarTrigger({ className, ...props }) {
  const r = React.useContext(RootCtx);
  const k = React.useContext(MenuCtx);
  const on = r.open === k;
  return <button type="button" role="menuitem" data-slot="menubar-trigger" data-state={on ? "open" : "closed"} className={cx("ds-menubar-trigger", className)}
    onClick={() => r.setOpen(on ? null : k)} onMouseEnter={() => r.open !== null && r.setOpen(k)} {...props} />;
}
export function MenubarContent({ className, ...props }) {
  const r = React.useContext(RootCtx);
  const k = React.useContext(MenuCtx);
  return r.open === k ? <div role="menu" data-slot="menubar-content" className={cx("ds-popover-surface ds-menubar-content", className)} onClick={(e) => { if (e.target.closest("[data-close-on-select]")) r.setOpen(null); }} {...props} /> : null;
}
export function MenubarItem({ variant = "default", inset, disabled, className, onSelect, onClick, ...props }) {
  return <div role="menuitem" data-close-on-select="" data-disabled={disabled ? "" : undefined} className={cx("ds-menu-item", variant === "destructive" && "ds-menu-item--destructive", inset && "ds-menu-item--inset", className)}
    onClick={(e) => { onSelect && onSelect(e); onClick && onClick(e); }} {...props} />;
}
export function MenubarSeparator({ className, ...props }) { return <div role="separator" className={cx("ds-menu-sep", className)} {...props} />; }
export function MenubarLabel({ inset, className, ...props }) { return <div className={cx("ds-menu-label", inset && "ds-menu-item--inset", className)} {...props} />; }
export function MenubarShortcut({ className, ...props }) { return <span className={cx("ds-menu-shortcut", className)} {...props} />; }
