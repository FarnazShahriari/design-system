import * as React from "react";
import { cx, Icon } from "../core/Icon.jsx";

export function Spinner({ className, size, ...props }) {
  return <span role="status" aria-label="Loading" style={{ display: "inline-flex" }}><Icon name="loader-circle" size={size} className={cx("ds-spinner", className)} {...props} /></span>;
}
