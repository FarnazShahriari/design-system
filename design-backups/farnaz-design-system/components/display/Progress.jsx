import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Progress({ value = 0, className, ...props }) {
  return (
    <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} data-slot="progress" className={cx("ds-progress", className)} {...props}>
      <div data-slot="progress-indicator" className="ds-progress-indicator" style={{ transform: "translateX(-" + (100 - (value || 0)) + "%)" }} />
    </div>
  );
}
