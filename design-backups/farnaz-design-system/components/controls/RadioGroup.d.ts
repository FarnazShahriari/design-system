import * as React from "react";

/**
 * One-of-many choice.
 */
export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
export declare function RadioGroupItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
