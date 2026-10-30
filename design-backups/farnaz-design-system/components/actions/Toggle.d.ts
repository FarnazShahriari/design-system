import * as React from "react";

/**
 * Two-state button for formatting-style controls (not settings — use Switch).
 */
export interface ToggleProps {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (v: boolean) => void;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Toggle(props: ToggleProps): JSX.Element;
