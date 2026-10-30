import * as React from "react";
import { cx } from "../core/Icon.jsx";
import { Button } from "../actions/Button.jsx";

export function InputGroup({ className, ...props }) {
  return <div role="group" data-slot="input-group" className={cx("ds-input-group", className)} {...props} />;
}
export function InputGroupAddon({ align = "inline-start", className, ...props }) {
  return (
    <div role="group" data-slot="input-group-addon" data-align={align} className={cx("ds-input-group-addon", className)}
      onClick={(e) => { if (e.target.closest("button")) return; const i = e.currentTarget.parentElement.querySelector("input,textarea"); i && i.focus(); }} {...props} />
  );
}
export function InputGroupButton({ variant = "ghost", size = "xs", ...props }) {
  return <Button variant={variant} size={size} {...props} />;
}
export function InputGroupText({ className, ...props }) {
  return <span className={cx("text-sm text-muted", className)} style={{ display: "flex", alignItems: "center", gap: 8 }} {...props} />;
}
export function InputGroupInput({ className, ...props }) {
  return <input data-slot="input-group-control" className={cx("ds-input", className)} {...props} />;
}
export function InputGroupTextarea({ className, ...props }) {
  return <textarea data-slot="input-group-control" className={cx("ds-textarea", className)} style={{ resize: "none", paddingTop: 12, paddingBottom: 12 }} {...props} />;
}
