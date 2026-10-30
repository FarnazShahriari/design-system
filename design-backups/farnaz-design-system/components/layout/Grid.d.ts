import * as React from "react";

/**
 * 12-column grid with 16px gutter; children span themselves.
 */
export interface GridProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Grid(props: GridProps): JSX.Element;
