import * as React from "react";
import { cx, Icon } from "../core/Icon.jsx";

export function Breadcrumb(props) { return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />; }
export function BreadcrumbList({ className, ...props }) { return <ol data-slot="breadcrumb-list" className={cx("ds-breadcrumb-list", className)} {...props} />; }
export function BreadcrumbItem({ className, ...props }) { return <li data-slot="breadcrumb-item" className={cx("ds-breadcrumb-item", className)} {...props} />; }
export function BreadcrumbLink({ className, ...props }) { return <a data-slot="breadcrumb-link" className={cx("ds-breadcrumb-link", className)} {...props} />; }
export function BreadcrumbPage({ className, ...props }) { return <span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className={cx("ds-breadcrumb-page", className)} {...props} />; }
export function BreadcrumbSeparator({ children, className, ...props }) { return <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={cx("ds-breadcrumb-sep", className)} style={{ display: "flex" }} {...props}>{children || <Icon name="chevron-right" />}</li>; }
export function BreadcrumbEllipsis({ className, ...props }) { return <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" className={cx("ds-breadcrumb-ellipsis", className)} {...props}><Icon name="ellipsis" /></span>; }
