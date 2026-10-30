import * as React from "react";

/**
 * Form label, text-sm medium.
 */
export interface LabelProps {
  htmlFor?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Label(props: LabelProps): JSX.Element;
