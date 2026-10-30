import * as React from "react";

/**
 * Right-click menu over a region.
 */
export interface ContextMenuProps {
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function ContextMenu(props: ContextMenuProps): JSX.Element;
export declare function ContextMenuTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ContextMenuContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ContextMenuItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ContextMenuLabel(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ContextMenuSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ContextMenuShortcut(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
