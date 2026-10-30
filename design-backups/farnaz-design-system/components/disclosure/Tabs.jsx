import * as React from "react";
import { cx, useControllable } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function Tabs({ value, defaultValue, onValueChange, orientation = "horizontal", className, children, ...props }) {
  const [v, setV] = useControllable(value, defaultValue, onValueChange);
  return <div data-slot="tabs" data-orientation={orientation} className={cx("ds-tabs", className)} {...props}><Ctx.Provider value={{ v, setV }}>{children}</Ctx.Provider></div>;
}
export function TabsList({ variant = "default", className, ...props }) {
  return <div role="tablist" data-slot="tabs-list" data-variant={variant} className={cx("ds-tabs-list", variant === "line" && "ds-tabs-list--line", className)} {...props} />;
}
export function TabsTrigger({ value, className, ...props }) {
  const c = React.useContext(Ctx);
  const on = c.v === value;
  return <button type="button" role="tab" aria-selected={on} data-slot="tabs-trigger" data-state={on ? "active" : "inactive"} className={cx("ds-tabs-trigger", className)} onClick={() => c.setV(value)} {...props} />;
}
export function TabsContent({ value, className, ...props }) {
  const c = React.useContext(Ctx);
  return c.v === value ? <div role="tabpanel" data-slot="tabs-content" className={cx("ds-tabs-content", className)} {...props} /> : null;
}
