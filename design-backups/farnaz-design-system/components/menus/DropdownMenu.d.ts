import * as React from "react";

/**
 * Action menu from a button.
 */
export interface DropdownMenuProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (v: boolean) => void;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function DropdownMenu(props: DropdownMenuProps): JSX.Element;
export declare function DropdownMenuTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuCheckboxItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuRadioGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuRadioItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuLabel(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function DropdownMenuShortcut(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
