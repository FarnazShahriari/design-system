import * as React from "react";

/**
 * The workhorse link: permanent muted rule + currentColor wipe on hover. Use for most actions.
 */
export interface LinkUnderlineProps {
  href?: string;
  onClick?: (e: any) => void;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function LinkUnderline(props: LinkUnderlineProps): JSX.Element;
