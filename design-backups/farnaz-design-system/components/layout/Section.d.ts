import * as React from "react";

/**
 * A page is a stack of Sections. theme re-declares colour tokens for the subtree so every child inverts on its own; rhythm sets vertical padding.
 */
export interface SectionProps {
  theme?: "light" | "muted" | "dark" | "accent" | "inherit";
  rhythm?: "none" | "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Section(props: SectionProps): JSX.Element;
