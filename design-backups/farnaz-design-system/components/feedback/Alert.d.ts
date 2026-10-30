import * as React from "react";

/**
 * Inline, persistent message within the page.
 */
export interface AlertProps {
  variant?: "default" | "destructive";
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Alert(props: AlertProps): JSX.Element;
export declare function AlertTitle(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AlertDescription(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
