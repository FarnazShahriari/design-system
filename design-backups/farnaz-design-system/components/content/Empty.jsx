import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Empty({ bordered = false, className, ...props }) { return <div data-slot="empty" className={cx("ds-empty", bordered && "ds-empty--bordered", className)} {...props} />; }
export function EmptyHeader({ className, ...props }) { return <div data-slot="empty-header" className={cx("ds-empty-header", className)} {...props} />; }
export function EmptyMedia({ variant = "default", className, ...props }) { return <div data-slot="empty-icon" data-variant={variant} className={cx("ds-empty-media", variant === "icon" && "ds-empty-media--icon", className)} {...props} />; }
export function EmptyTitle({ className, ...props }) { return <div data-slot="empty-title" className={cx("ds-empty-title", className)} {...props} />; }
export function EmptyDescription({ className, ...props }) { return <div data-slot="empty-description" className={cx("ds-empty-description", className)} {...props} />; }
export function EmptyContent({ className, ...props }) { return <div data-slot="empty-content" className={cx("ds-empty-content", className)} {...props} />; }
