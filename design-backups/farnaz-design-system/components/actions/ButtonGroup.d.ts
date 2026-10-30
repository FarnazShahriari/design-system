import * as React from "react";

/**
 * Related buttons bound into one unit with shared edges.
 */
export interface ButtonGroupProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;
export declare function ButtonGroupText(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ButtonGroupSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
