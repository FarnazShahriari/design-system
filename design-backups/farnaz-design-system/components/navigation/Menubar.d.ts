import * as React from "react";

/**
 * Desktop-app style menu bar.
 */
export interface MenubarProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Menubar(props: MenubarProps): JSX.Element;
export declare function MenubarMenu(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function MenubarTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function MenubarContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function MenubarItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function MenubarSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function MenubarLabel(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function MenubarShortcut(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
