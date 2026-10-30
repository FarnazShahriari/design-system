import * as React from "react";

/**
 * Short label on hover/focus — inverted foreground ground.
 */
export interface TooltipProps {
  defaultOpen?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
export declare function TooltipTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TooltipContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TooltipProvider(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
