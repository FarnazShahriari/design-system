import * as React from "react";
import { cx, Icon, renderTrigger, useControllable, useDismiss } from "../core/Icon.jsx";

const Ctx = React.createContext(null);
const RadioCtx = React.createContext(null);

export function DropdownMenu({ open, defaultOpen = false, onOpenChange, children }) {
  const [o, setO] = useControllable(open, defaultOpen, onOpenChange);
  const ref = React.useRef(null);
  useDismiss(o, () => setO(false), ref);
  return <span ref={ref} className="ds-popover-anchor" data-slot="dropdown-menu"><Ctx.Provider value={{ open: o, setOpen: setO }}>{children}</Ctx.Provider></span>;
}
export function DropdownMenuTrigger({ asChild, children, ...props }) {
  const c = React.useContext(Ctx);
  return renderTrigger(asChild, children, Object.assign({ "aria-expanded": c.open, "data-state": c.open ? "open" : "closed", onClick: () => c.setOpen(!c.open) }, props));
}
export function DropdownMenuContent({ side = "bottom", align = "start", className, style, ...props }) {
  const c = React.useContext(Ctx);
  if (!c.open) return null;
  return <div role="menu" data-slot="dropdown-menu-content" className={cx("ds-popover-surface ds-menu-content", className)}
    style={Object.assign({ position: "absolute", zIndex: 50 }, side === "top" ? { bottom: "calc(100% + 4px)" } : { top: "calc(100% + 4px)" }, align === "end" ? { right: 0 } : { left: 0 }, style)}
    onClick={(e) => { if (e.target.closest("[data-close-on-select]")) c.setOpen(false); }} {...props} />;
}
export function DropdownMenuGroup(props) { return <div role="group" {...props} />; }
export function DropdownMenuItem({ variant = "default", inset, disabled, className, onSelect, onClick, ...props }) {
  return <div role="menuitem" data-close-on-select="" data-disabled={disabled ? "" : undefined} className={cx("ds-menu-item", variant === "destructive" && "ds-menu-item--destructive", inset && "ds-menu-item--inset", className)}
    onClick={(e) => { onSelect && onSelect(e); onClick && onClick(e); }} {...props} />;
}
export function DropdownMenuCheckboxItem({ checked, onCheckedChange, className, children, ...props }) {
  return <div role="menuitemcheckbox" aria-checked={!!checked} className={cx("ds-menu-item", className)} onClick={() => onCheckedChange && onCheckedChange(!checked)} {...props}>
    <span className="ds-menu-check" style={{ display: "flex", width: 14, height: 14, alignItems: "center", justifyContent: "center" }}>{checked ? <Icon name="check" /> : null}</span>{children}</div>;
}
export function DropdownMenuRadioGroup({ value, onValueChange, children }) { return <RadioCtx.Provider value={{ value, onValueChange }}><div role="group">{children}</div></RadioCtx.Provider>; }
export function DropdownMenuRadioItem({ value, className, children, ...props }) {
  const r = React.useContext(RadioCtx);
  const on = r && r.value === value;
  return <div role="menuitemradio" aria-checked={on} className={cx("ds-menu-item", className)} onClick={() => r && r.onValueChange && r.onValueChange(value)} {...props}>
    <span className="ds-menu-check" style={{ display: "flex", width: 14, height: 14, alignItems: "center", justifyContent: "center" }}>{on ? <Icon name="circle" size={8} style={{ fill: "currentColor" }} /> : null}</span>{children}</div>;
}
export function DropdownMenuLabel({ inset, className, ...props }) { return <div className={cx("ds-menu-label", inset && "ds-menu-item--inset", className)} {...props} />; }
export function DropdownMenuSeparator({ className, ...props }) { return <div role="separator" className={cx("ds-menu-sep", className)} {...props} />; }
export function DropdownMenuShortcut({ className, ...props }) { return <span className={cx("ds-menu-shortcut", className)} {...props} />; }
