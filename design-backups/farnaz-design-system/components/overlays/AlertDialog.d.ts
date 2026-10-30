import * as React from "react";

/**
 * Confirmation for destructive or irreversible actions.
 */
export interface AlertDialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (v: boolean) => void;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function AlertDialog(props: AlertDialogProps): JSX.Element;
export declare function AlertDialogTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AlertDialogContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AlertDialogHeader(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AlertDialogFooter(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AlertDialogTitle(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AlertDialogDescription(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AlertDialogAction(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AlertDialogCancel(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
