import * as React from "react";

/**
 * Pulsing placeholder while content loads.
 */
export interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
