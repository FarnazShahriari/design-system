import * as React from "react";
import { cx, Icon } from "../core/Icon.jsx";

export function Pagination({ className, ...props }) { return <nav role="navigation" aria-label="pagination" data-slot="pagination" className={cx("ds-pagination", className)} {...props} />; }
export function PaginationContent({ className, ...props }) { return <ul data-slot="pagination-content" className={cx("ds-pagination-content", className)} {...props} />; }
export function PaginationItem(props) { return <li data-slot="pagination-item" {...props} />; }
export function PaginationLink({ isActive, size = "icon", className, ...props }) {
  return <a aria-current={isActive ? "page" : undefined} data-slot="pagination-link" data-active={isActive}
    className={cx("ds-btn", isActive ? "ds-btn--outline" : "ds-btn--ghost", size !== "default" && "ds-btn--" + size, className)} {...props} />;
}
export function PaginationPrevious({ className, ...props }) {
  return <PaginationLink aria-label="Go to previous page" size="default" className={className} style={{ gap: 4, padding: "0 10px" }} {...props}><Icon name="chevron-left" /><span>Previous</span></PaginationLink>;
}
export function PaginationNext({ className, ...props }) {
  return <PaginationLink aria-label="Go to next page" size="default" className={className} style={{ gap: 4, padding: "0 10px" }} {...props}><span>Next</span><Icon name="chevron-right" /></PaginationLink>;
}
export function PaginationEllipsis({ className, ...props }) { return <span aria-hidden data-slot="pagination-ellipsis" className={cx("ds-pagination-ellipsis", className)} {...props}><Icon name="ellipsis" /></span>; }
