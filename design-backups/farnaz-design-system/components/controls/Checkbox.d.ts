import * as React from "react";

/**
 * Binary choice in a form or list.
 */
export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (v: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
  [key: string]: any;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
