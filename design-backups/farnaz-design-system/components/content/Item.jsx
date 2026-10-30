import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function ItemGroup({ className, ...props }) { return <div role="list" data-slot="item-group" className={cx("ds-item-group", className)} {...props} />; }
export function ItemSeparator({ className, ...props }) { return <div data-slot="item-separator" data-orientation="horizontal" className={cx("ds-separator", className)} {...props} />; }
export function Item({ variant = "default", size = "default", href, className, ...props }) {
  const cls = cx("ds-item", variant !== "default" && "ds-item--" + variant, size === "sm" && "ds-item--sm", className);
  return href ? <a href={href} data-slot="item" className={cls} {...props} /> : <div data-slot="item" data-variant={variant} data-size={size} className={cls} {...props} />;
}
export function ItemMedia({ variant = "default", className, ...props }) { return <div data-slot="item-media" data-variant={variant} className={cx("ds-item-media", variant !== "default" && "ds-item-media--" + variant, className)} {...props} />; }
export function ItemContent({ className, ...props }) { return <div data-slot="item-content" className={cx("ds-item-content", className)} {...props} />; }
export function ItemTitle({ className, ...props }) { return <div data-slot="item-title" className={cx("ds-item-title", className)} {...props} />; }
export function ItemDescription({ className, ...props }) { return <p data-slot="item-description" className={cx("ds-item-description", className)} {...props} />; }
export function ItemActions({ className, ...props }) { return <div data-slot="item-actions" className={cx("ds-item-actions", className)} {...props} />; }
export function ItemHeader({ className, ...props }) { return <div data-slot="item-header" className={cx("ds-item-header", className)} {...props} />; }
export function ItemFooter({ className, ...props }) { return <div data-slot="item-footer" className={cx("ds-item-footer", className)} {...props} />; }
