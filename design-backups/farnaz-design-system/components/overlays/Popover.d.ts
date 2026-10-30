import * as React from "react";

/**
 * Anchored floating panel opened by click.
 */
export interface PopoverProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (v: boolean) => void;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Popover(props: PopoverProps): JSX.Element;
export declare function PopoverTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function PopoverContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
