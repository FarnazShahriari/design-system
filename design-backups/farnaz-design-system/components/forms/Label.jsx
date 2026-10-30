import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Label({ className, ...props }) {
  return <label data-slot="label" className={cx("ds-label", className)} {...props} />;
}
