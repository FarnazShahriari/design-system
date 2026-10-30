import * as React from "react";
import { cx, useControllable } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function RadioGroup({ value, defaultValue, onValueChange, className, children, ...props }) {
  const [v, setV] = useControllable(value, defaultValue, onValueChange);
  return <div role="radiogroup" data-slot="radio-group" className={cx("ds-radio-group", className)} {...props}><Ctx.Provider value={{ v, setV }}>{children}</Ctx.Provider></div>;
}
export function RadioGroupItem({ value, disabled, className, ...props }) {
  const c = React.useContext(Ctx);
  const on = c.v === value;
  return <button type="button" role="radio" aria-checked={on} data-slot="radio-group-item" data-state={on ? "checked" : "unchecked"} disabled={disabled}
    className={cx("ds-radio", className)} onClick={() => c.setV(value)} {...props} />;
}
