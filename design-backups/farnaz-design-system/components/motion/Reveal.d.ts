import * as React from "react";

/**
 * Scroll reveal — fires once. The only scroll-motion primitive.
 */
export interface RevealProps {
  variant?: "fade" | "rise" | "rise-fade";
  /** seconds */ delay?: number;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Reveal(props: RevealProps): JSX.Element;
export declare function RevealGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
