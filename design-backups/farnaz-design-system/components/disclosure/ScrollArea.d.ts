import * as React from "react";

/**
 * Scroll container with a thin --border scrollbar.
 */
export interface ScrollAreaProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function ScrollArea(props: ScrollAreaProps): JSX.Element;
export declare function ScrollBar(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
