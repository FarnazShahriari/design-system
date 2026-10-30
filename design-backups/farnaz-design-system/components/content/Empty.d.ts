import * as React from "react";

/**
 * Empty state: icon, title, one line of help, and an action.
 */
export interface EmptyProps {
  /** adds the 1px dashed border */ bordered?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Empty(props: EmptyProps): JSX.Element;
export declare function EmptyHeader(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function EmptyMedia(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function EmptyTitle(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function EmptyDescription(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function EmptyContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
