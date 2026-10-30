import * as React from "react";

/**
 * Unstyled show/hide primitive.
 */
export interface CollapsibleProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (v: boolean) => void;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Collapsible(props: CollapsibleProps): JSX.Element;
export declare function CollapsibleTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CollapsibleContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
