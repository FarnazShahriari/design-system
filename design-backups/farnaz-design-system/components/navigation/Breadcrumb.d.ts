import * as React from "react";

/**
 * Location trail.
 */
export interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
export declare function BreadcrumbList(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function BreadcrumbItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function BreadcrumbLink(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function BreadcrumbPage(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function BreadcrumbSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function BreadcrumbEllipsis(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
