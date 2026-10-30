import * as React from "react";

/**
 * Tabular data with hairline row rules.
 */
export interface TableProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Table(props: TableProps): JSX.Element;
export declare function TableHeader(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TableBody(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TableFooter(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TableRow(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TableHead(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TableCell(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TableCaption(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
