import * as React from "react";
import { cx, useControllable } from "../core/Icon.jsx";

export function Switch({ checked, defaultChecked = false, onCheckedChange, size = "default", disabled, className, ...props }) {
  const [on, setOn] = useControllable(checked, defaultChecked, onCheckedChange);
  return (
    <button type="button" role="switch" aria-checked={on} data-slot="switch" data-size={size} data-state={on ? "checked" : "unchecked"} disabled={disabled}
      className={cx("ds-switch", size === "sm" && "ds-switch--sm", className)} onClick={() => setOn(!on)} {...props}>
      <span className="ds-switch-thumb" data-state={on ? "checked" : "unchecked"} />
    </button>
  );
}
