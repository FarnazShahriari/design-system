import * as React from "react";
import { cx } from "../core/Icon.jsx";

/** A visible 1px rule in --border. (A block of empty rhythm is Divider — a different idea.) */
export function Separator({ orientation = "horizontal", decorative = true, className, ...props }) {
  return <div data-slot="separator" role={decorative ? "none" : "separator"} data-orientation={orientation} className={cx("ds-separator", className)} {...props} />;
}
