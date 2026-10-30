import * as React from "react";
import { cx } from "../core/Icon.jsx";

/** Owns its ground (theme re-declares colour tokens) and vertical rhythm. Pages are a stack of these. */
export function Section({ theme = "inherit", rhythm = "default", className, ...props }) {
  return <section data-slot="section" data-section={theme === "inherit" ? undefined : theme} className={cx("ds-section", "ds-rhythm--" + rhythm, className)} {...props} />;
}
