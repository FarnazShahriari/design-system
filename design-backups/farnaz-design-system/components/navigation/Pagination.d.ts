import * as React from "react";

/**
 * Page navigation for long lists; active page uses the outline button.
 */
export interface PaginationProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
export declare function PaginationContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function PaginationItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function PaginationLink(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function PaginationPrevious(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function PaginationNext(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function PaginationEllipsis(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
