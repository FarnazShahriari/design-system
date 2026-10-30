import * as React from "react";

/**
 * A set of toggles, single or multi-select.
 */
export interface ToggleGroupProps {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (v: any) => void;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  /** gap in 4px steps;
  0 joins the items */ spacing?: number;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function ToggleGroup(props: ToggleGroupProps): JSX.Element;
export declare function ToggleGroupItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
