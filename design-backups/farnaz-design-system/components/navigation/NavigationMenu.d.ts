import * as React from "react";

/**
 * Site navigation with hover-open panels.
 */
export interface NavigationMenuProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function NavigationMenu(props: NavigationMenuProps): JSX.Element;
export declare function NavigationMenuList(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function NavigationMenuItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function NavigationMenuTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function NavigationMenuContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function NavigationMenuLink(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
