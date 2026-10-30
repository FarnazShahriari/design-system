import * as React from "react";

/**
 * Locks media to an aspect ratio so nothing reflows on load.
 */
export interface AspectRatioProps {
  ratio?: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function AspectRatio(props: AspectRatioProps): JSX.Element;
