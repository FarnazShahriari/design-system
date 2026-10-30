import * as React from "react";
import { cx } from "../core/Icon.jsx";

/** 12 columns, 16px gutter. Children place themselves: style={{ gridColumn: "span 7" }}. */
export function Grid({ className, ...props }) {
  return <div data-slot="grid" className={cx("ds-grid", className)} {...props} />;
}
