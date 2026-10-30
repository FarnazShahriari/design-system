import * as React from "react";
import { cx, renderTrigger } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function HoverCard({ openDelay = 200, closeDelay = 100, defaultOpen = false, children }) {
  const [o, setO] = React.useState(defaultOpen);
  const t = React.useRef();
  const show = () => { clearTimeout(t.current); t.current = setTimeout(() => setO(true), openDelay); };
  const hide = () => { clearTimeout(t.current); t.current = setTimeout(() => setO(false), closeDelay); };
  return <span className="ds-popover-anchor" data-slot="hover-card" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}><Ctx.Provider value={o}>{children}</Ctx.Provider></span>;
}
export function HoverCardTrigger({ asChild, children, ...props }) { return renderTrigger(asChild, children, props); }
export function HoverCardContent({ side = "bottom", align = "center", className, ...props }) {
  const o = React.useContext(Ctx);
  return o ? <div data-slot="hover-card-content" className={cx("ds-popover-surface ds-popover ds-hover-card", "ds-float--" + side, align !== "center" && "ds-float--" + align, className)} {...props} /> : null;
}
