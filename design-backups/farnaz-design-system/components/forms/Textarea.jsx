import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Textarea({ className, ...props }) {
  return <textarea data-slot="textarea" className={cx("ds-textarea", className)} {...props} />;
}
