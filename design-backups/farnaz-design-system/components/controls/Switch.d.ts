import * as React from "react";

/**
 * On/off setting that applies immediately.
 */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (v: boolean) => void;
  size?: "default" | "sm";
  disabled?: boolean;
  className?: string;
  [key: string]: any;
}
export declare function Switch(props: SwitchProps): JSX.Element;
