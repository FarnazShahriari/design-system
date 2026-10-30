import * as React from "react";

/**
 * Circular person image with initials fallback.
 */
export interface AvatarProps {
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
export declare function AvatarImage(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AvatarFallback(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AvatarBadge(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AvatarGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AvatarGroupCount(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
