import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Card({ className, ...props }) { return <div data-slot="card" className={cx("ds-card", className)} {...props} />; }
export function CardHeader({ className, ...props }) { return <div data-slot="card-header" className={cx("ds-card-header", className)} {...props} />; }
export function CardTitle({ className, ...props }) { return <div data-slot="card-title" className={cx("ds-card-title", className)} {...props} />; }
export function CardDescription({ className, ...props }) { return <div data-slot="card-description" className={cx("ds-card-description", className)} {...props} />; }
export function CardAction({ className, ...props }) { return <div data-slot="card-action" className={cx("ds-card-action", className)} {...props} />; }
export function CardContent({ className, ...props }) { return <div data-slot="card-content" className={cx("ds-card-content", className)} {...props} />; }
export function CardFooter({ className, ...props }) { return <div data-slot="card-footer" className={cx("ds-card-footer", className)} {...props} />; }
