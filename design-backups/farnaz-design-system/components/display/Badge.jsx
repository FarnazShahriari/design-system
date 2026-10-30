import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Badge({ variant = "default", href, className, ...props }) {
  const cls = cx("ds-badge", "ds-badge--" + variant, className);
  return href ? <a href={href} data-slot="badge" className={cls} {...props} /> : <span data-slot="badge" data-variant={variant} className={cls} {...props} />;
}
