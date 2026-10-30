import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function ScrollArea({ className, ...props }) { return <div data-slot="scroll-area" className={cx("ds-scroll-area", className)} {...props} />; }
/** Present for API parity; the native (thin, --border thumb) scrollbar is styled by ScrollArea itself. */
export function ScrollBar() { return null; }
