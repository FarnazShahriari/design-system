import * as React from "react";
import { cx, renderTrigger } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

/** Present for API parity with the source (delayDuration 0 there). */
export function TooltipProvider({ children }) { return <>{children}</>; }
export function Tooltip({ defaultOpen = false, children }) {
  const [o, setO] = React.useState(defaultOpen);
  return <span className="ds-popover-anchor" data-slot="tooltip" onMouseEnter={() => setO(true)} onMouseLeave={() => setO(false)} onFocus={() => setO(true)} onBlur={() => setO(false)}><Ctx.Provider value={o}>{children}</Ctx.Provider></span>;
}
export function TooltipTrigger({ asChild, children, ...props }) { return renderTrigger(asChild, children, props); }
export function TooltipContent({ side = "top", className, children, ...props }) {
  const o = React.useContext(Ctx);
  return o ? <div role="tooltip" data-slot="tooltip-content" className={cx("ds-tooltip", "ds-float--" + side, className)} {...props}>{children}<span className="ds-tooltip-arrow" /></div> : null;
}
