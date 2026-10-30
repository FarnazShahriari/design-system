import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function AspectRatio({ ratio = 1, className, style, ...props }) {
  return <div data-slot="aspect-ratio" className={cx("ds-aspect", className)} style={Object.assign({ aspectRatio: String(ratio) }, style)} {...props} />;
}
