import * as React from "react";

/**
 * Single-line text input with a 3:1 --input boundary.
 */
export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean;
  onChange?: (e: any) => void;
  className?: string;
  [key: string]: any;
}
export declare function Input(props: InputProps): JSX.Element;
