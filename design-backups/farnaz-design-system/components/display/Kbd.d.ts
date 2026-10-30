import * as React from "react";

/**
 * Keyboard key hint.
 */
export interface KbdProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Kbd(props: KbdProps): JSX.Element;
export declare function KbdGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
