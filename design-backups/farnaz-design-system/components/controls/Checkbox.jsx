import * as React from "react";
import { cx, Icon, useControllable } from "../core/Icon.jsx";

export function Checkbox({ checked, defaultChecked = false, onCheckedChange, disabled, className, id, ...props }) {
  const [on, setOn] = useControllable(checked, defaultChecked, onCheckedChange);
  return (
    <button type="button" role="checkbox" id={id} aria-checked={on} data-slot="checkbox" data-state={on ? "checked" : "unchecked"} disabled={disabled}
      className={cx("ds-checkbox", className)} onClick={() => setOn(!on)} {...props}>
      {on ? <Icon name="check" /> : null}
    </button>
  );
}
