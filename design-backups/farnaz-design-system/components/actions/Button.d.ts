import * as React from "react";

/**
 * Button for genuine commitments; most actions in this system are LinkUnderline text links. Use `pill` for the single primary CTA on a page.
 */
export interface ButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  /** rounded-pill — the one primary CTA per page */ pill?: boolean;
  href?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Button(props: ButtonProps): JSX.Element;
