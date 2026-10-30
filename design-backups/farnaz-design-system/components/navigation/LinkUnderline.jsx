import * as React from "react";
import { cx } from "../core/Icon.jsx";

/** The workhorse link: a permanent muted 1px rule, plus a currentColor rule that wipes in from the left on hover (350ms, ease-out-expo). */
export function LinkUnderline({ href, className, ...props }) {
  const cls = cx("ds-link-underline", className);
  return href ? <a href={href} data-slot="link-underline" className={cls} {...props} /> : <span data-slot="link-underline" className={cls} tabIndex={0} {...props} />;
}
