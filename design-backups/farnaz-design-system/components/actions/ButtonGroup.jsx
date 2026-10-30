import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function ButtonGroup({ orientation = "horizontal", className, ...props }) {
  return <div role="group" data-slot="button-group" data-orientation={orientation} className={cx("ds-btn-group", "ds-btn-group--" + orientation, className)} {...props} />;
}
export function ButtonGroupText({ className, ...props }) {
  return <div className={cx("ds-btn-group-text", className)} {...props} />;
}
export function ButtonGroupSeparator({ className, ...props }) {
  return <div data-slot="button-group-separator" role="separator" className={cx("ds-btn-group-sep", className)} {...props} />;
}
