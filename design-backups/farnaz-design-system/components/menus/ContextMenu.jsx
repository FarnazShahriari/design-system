import * as React from "react";
import { cx, useDismiss } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function ContextMenu({ children }) {
  const [pos, setPos] = React.useState(null);
  const ref = React.useRef(null);
  useDismiss(!!pos, () => setPos(null), ref);
  return <div ref={ref} data-slot="context-menu" style={{ position: "relative" }}><Ctx.Provider value={{ pos, setPos, ref }}>{children}</Ctx.Provider></div>;
}
export function ContextMenuTrigger({ className, ...props }) {
  const c = React.useContext(Ctx);
  return <div data-slot="context-menu-trigger" className={className} onContextMenu={(e) => { e.preventDefault(); const r = c.ref.current.getBoundingClientRect(); c.setPos({ x: e.clientX - r.left, y: e.clientY - r.top }); }} {...props} />;
}
export function ContextMenuContent({ className, style, ...props }) {
  const c = React.useContext(Ctx);
  if (!c.pos) return null;
  return <div role="menu" data-slot="context-menu-content" className={cx("ds-popover-surface ds-menu-content", className)} style={Object.assign({ position: "absolute", left: c.pos.x, top: c.pos.y, zIndex: 50 }, style)}
    onClick={(e) => { if (e.target.closest("[data-close-on-select]")) c.setPos(null); }} {...props} />;
}
export function ContextMenuItem({ variant = "default", inset, disabled, className, onSelect, onClick, ...props }) {
  return <div role="menuitem" data-close-on-select="" data-disabled={disabled ? "" : undefined} className={cx("ds-menu-item", variant === "destructive" && "ds-menu-item--destructive", inset && "ds-menu-item--inset", className)}
    onClick={(e) => { onSelect && onSelect(e); onClick && onClick(e); }} {...props} />;
}
export function ContextMenuLabel({ inset, className, ...props }) { return <div className={cx("ds-menu-label", inset && "ds-menu-item--inset", className)} {...props} />; }
export function ContextMenuSeparator({ className, ...props }) { return <div role="separator" className={cx("ds-menu-sep", className)} {...props} />; }
export function ContextMenuShortcut({ className, ...props }) { return <span className={cx("ds-menu-shortcut", className)} {...props} />; }
