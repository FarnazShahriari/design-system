import * as React from "react";
import { cx, useControllable } from "../core/Icon.jsx";

/** A button with an on state — for formatting-style controls. Settings use Switch. */
export function Toggle({ pressed, defaultPressed = false, onPressedChange, variant = "default", size = "default", className, onClick, ...props }) {
  const [on, setOn] = useControllable(pressed, defaultPressed, onPressedChange);
  return (
    <button type="button" data-slot="toggle" aria-pressed={on} data-state={on ? "on" : "off"}
      className={cx("ds-toggle", variant === "outline" && "ds-toggle--outline", size !== "default" && "ds-toggle--" + size, className)}
      onClick={(e) => { setOn(!on); onClick && onClick(e); }} {...props} />
  );
}
