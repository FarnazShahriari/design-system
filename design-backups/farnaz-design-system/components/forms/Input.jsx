import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Input({ className, type = "text", ...props }) {
  return <input type={type} data-slot="input" className={cx("ds-input", className)} {...props} />;
}
