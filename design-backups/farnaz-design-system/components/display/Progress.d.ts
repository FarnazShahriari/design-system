import * as React from "react";

/**
 * Determinate progress bar, 0–100.
 */
export interface ProgressProps {
  value?: number;
  className?: string;
  [key: string]: any;
}
export declare function Progress(props: ProgressProps): JSX.Element;
