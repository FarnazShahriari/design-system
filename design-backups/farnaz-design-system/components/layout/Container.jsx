import * as React from "react";
import { cx } from "../core/Icon.jsx";

/** The only thing that sets horizontal insets: 24px, 40px from 768px, centred band. */
export function Container({ width = "default", className, ...props }) {
  return <div data-slot="container" className={cx("ds-container", "ds-container--" + width, className)} {...props} />;
}
