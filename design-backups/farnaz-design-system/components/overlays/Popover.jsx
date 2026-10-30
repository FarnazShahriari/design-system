import * as React from "react";
import { cx, renderTrigger, useControllable, useDismiss } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function Popover({ open, defaultOpen = false, onOpenChange, children }) {
  const [o, setO] = useControllable(open, defaultOpen, onOpenChange);
  const ref = React.useRef(null);
  useDismiss(o, () => setO(false), ref);
  return <span ref={ref} className="ds-popover-anchor" data-slot="popover"><Ctx.Provider value={{ open: o, setOpen: setO }}>{children}</Ctx.Provider></span>;
}
export function PopoverTrigger({ asChild, children, ...props }) {
  const c = React.useContext(Ctx);
  return renderTrigger(asChild, children, Object.assign({ "aria-expanded": c.open, onClick: () => c.setOpen(!c.open) }, props));
}
export function PopoverContent({ side = "bottom", align = "center", className, ...props }) {
  const c = React.useContext(Ctx);
  if (!c.open) return null;
  return <div data-slot="popover-content" className={cx("ds-popover-surface ds-popover", "ds-float--" + side, align !== "center" && "ds-float--" + align, className)} {...props} />;
}
