import * as React from "react";

/**
 * Indeterminate loading indicator (lucide loader-circle, spinning).
 */
export interface SpinnerProps {
  size?: number;
  className?: string;
  [key: string]: any;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;
