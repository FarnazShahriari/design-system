import * as React from "react";
import { cx, Icon, useControllable } from "../core/Icon.jsx";

const RootCtx = React.createContext(null);
const ItemCtx = React.createContext(null);

export function Accordion({ type = "single", collapsible = true, value, defaultValue, onValueChange, className, children, ...props }) {
  const [v, setV] = useControllable(value, defaultValue !== undefined ? defaultValue : type === "multiple" ? [] : "", onValueChange);
  const isOpen = (x) => (type === "multiple" ? (v || []).includes(x) : v === x);
  const toggle = (x) => {
    if (type === "multiple") setV(isOpen(x) ? v.filter((i) => i !== x) : [...(v || []), x]);
    else setV(isOpen(x) ? (collapsible ? "" : x) : x);
  };
  return <div data-slot="accordion" className={className} {...props}><RootCtx.Provider value={{ isOpen, toggle }}>{children}</RootCtx.Provider></div>;
}
export function AccordionItem({ value, className, children, ...props }) {
  const r = React.useContext(RootCtx);
  const open = r.isOpen(value);
  return <div data-slot="accordion-item" data-state={open ? "open" : "closed"} className={cx("ds-accordion-item", className)} {...props}><ItemCtx.Provider value={{ open, toggle: () => r.toggle(value) }}>{children}</ItemCtx.Provider></div>;
}
export function AccordionTrigger({ className, children, ...props }) {
  const c = React.useContext(ItemCtx);
  return (
    <h3 style={{ display: "flex", margin: 0, font: "inherit" }}>
      <button type="button" aria-expanded={c.open} data-slot="accordion-trigger" data-state={c.open ? "open" : "closed"} className={cx("ds-accordion-trigger", className)} onClick={c.toggle} {...props}>
        {children}<Icon name="chevron-down" />
      </button>
    </h3>
  );
}
export function AccordionContent({ className, children, ...props }) {
  const c = React.useContext(ItemCtx);
  return <div data-slot="accordion-content" data-state={c.open ? "open" : "closed"} className="ds-accordion-content" {...props}><div><div className={className}>{children}</div></div></div>;
}
