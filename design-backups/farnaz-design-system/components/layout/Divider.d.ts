import * as React from "react";

/**
 * A block of nothing at section rhythm, between two same-coloured sections.
 */
export interface DividerProps {
  theme?: "light" | "muted" | "dark" | "accent" | "inherit";
  size?: "sm" | "default" | "lg";
  className?: string;
  [key: string]: any;
}
export declare function Divider(props: DividerProps): JSX.Element;
