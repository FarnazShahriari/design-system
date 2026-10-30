import * as React from "react";

/**
 * A list row: media, title/description, actions.
 */
export interface ItemProps {
  variant?: "default" | "outline" | "muted";
  size?: "default" | "sm";
  href?: string;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Item(props: ItemProps): JSX.Element;
export declare function ItemGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ItemSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ItemMedia(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ItemContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ItemTitle(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ItemDescription(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ItemActions(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ItemHeader(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function ItemFooter(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
