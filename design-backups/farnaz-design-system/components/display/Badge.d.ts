import * as React from "react";

/**
 * Pill-shaped label for tags and status. Outline is the tag style on project cards.
 */
export interface BadgeProps {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  href?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Badge(props: BadgeProps): JSX.Element;
