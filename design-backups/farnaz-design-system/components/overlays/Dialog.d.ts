import * as React from "react";

/**
 * Modal for a focused task.
 */
export interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (v: boolean) => void;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Dialog(props: DialogProps): JSX.Element;
export declare function DialogTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DialogClose(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DialogOverlay(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DialogContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DialogHeader(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DialogFooter(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DialogTitle(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DialogDescription(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
