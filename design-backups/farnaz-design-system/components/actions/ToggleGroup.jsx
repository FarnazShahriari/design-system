import * as React from "react";
import { cx, useControllable } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function ToggleGroup({ type = "single", value, defaultValue, onValueChange, variant = "default", size = "default", spacing = 0, className, style, children, ...props }) {
  const [v, setV] = useControllable(value, defaultValue !== undefined ? defaultValue : type === "multiple" ? [] : "", onValueChange);
  const isOn = (x) => (type === "multiple" ? (v || []).includes(x) : v === x);
  const toggle = (x) => {
    if (type === "multiple") setV(isOn(x) ? v.filter((i) => i !== x) : [...(v || []), x]);
    else setV(isOn(x) ? "" : x);
  };
  return (
    <div role="group" data-slot="toggle-group" data-variant={variant} data-size={size} data-spacing={spacing}
      className={cx("ds-toggle-group", className)} style={Object.assign({ gap: spacing * 4 }, style)} {...props}>
      <Ctx.Provider value={{ isOn, toggle, variant, size }}>{children}</Ctx.Provider>
    </div>
  );
}

export function ToggleGroupItem({ value, className, ...props }) {
  const c = React.useContext(Ctx);
  const on = c.isOn(value);
  return (
    <button type="button" data-slot="toggle-group-item" aria-pressed={on} data-state={on ? "on" : "off"}
      className={cx("ds-toggle", c.variant === "outline" && "ds-toggle--outline", c.size !== "default" && "ds-toggle--" + c.size, className)}
      onClick={() => c.toggle(value)} {...props} />
  );
}
