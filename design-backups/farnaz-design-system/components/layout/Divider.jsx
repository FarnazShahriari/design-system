import * as React from "react";
import { cx } from "../core/Icon.jsx";

/** A block of nothing at section rhythm — lets two same-coloured sections breathe. Draws nothing. */
export function Divider({ theme = "inherit", size = "default", className, ...props }) {
  return <div data-slot="divider" aria-hidden="true" data-section={theme === "inherit" ? undefined : theme} className={cx("ds-divider", "ds-divider--" + size, className)} {...props} />;
}
