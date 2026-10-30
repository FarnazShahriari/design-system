import * as React from "react";

/**
 * Preview card on hover for a link or name.
 */
export interface HoverCardProps {
  openDelay?: number;
  closeDelay?: number;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function HoverCard(props: HoverCardProps): JSX.Element;
export declare function HoverCardTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function HoverCardContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
