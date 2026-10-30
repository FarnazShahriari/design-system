import * as React from "react";
import { renderTrigger, useControllable } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function Collapsible({ open, defaultOpen = false, onOpenChange, children, ...props }) {
  const [o, setO] = useControllable(open, defaultOpen, onOpenChange);
  return <div data-slot="collapsible" data-state={o ? "open" : "closed"} {...props}><Ctx.Provider value={{ o, setO }}>{children}</Ctx.Provider></div>;
}
export function CollapsibleTrigger({ asChild, children, ...props }) {
  const c = React.useContext(Ctx);
  return renderTrigger(asChild, children, Object.assign({ "aria-expanded": c.o, "data-state": c.o ? "open" : "closed", onClick: () => c.setO(!c.o) }, props));
}
export function CollapsibleContent({ children, ...props }) {
  const c = React.useContext(Ctx);
  return c.o ? <div data-slot="collapsible-content" {...props}>{children}</div> : null;
}
