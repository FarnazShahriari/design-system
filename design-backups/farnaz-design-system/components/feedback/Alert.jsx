import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Alert({ variant = "default", className, ...props }) { return <div role="alert" data-slot="alert" className={cx("ds-alert", variant === "destructive" && "ds-alert--destructive", className)} {...props} />; }
export function AlertTitle({ className, ...props }) { return <div data-slot="alert-title" className={cx("ds-alert-title", className)} {...props} />; }
export function AlertDescription({ className, ...props }) { return <div data-slot="alert-description" className={cx("ds-alert-description", className)} {...props} />; }
