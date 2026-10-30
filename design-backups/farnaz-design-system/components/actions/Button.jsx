import * as React from "react";
import { cx } from "../core/Icon.jsx";

/** The system's button. Most actions are text links — reach for a Button for a genuine commitment; pill for the one primary CTA per page. */
export function Button({ variant = "default", size = "default", pill = false, href, className, children, ...props }) {
  const cls = cx("ds-btn", "ds-btn--" + variant, size !== "default" && "ds-btn--" + size, pill && "ds-btn--pill", className);
  if (href) return <a href={href} data-slot="button" className={cls} {...props}>{children}</a>;
  return <button type="button" data-slot="button" data-variant={variant} data-size={size} className={cls} {...props}>{children}</button>;
}
