import * as React from "react";

/**
 * An input with inline or block addons (icons, text, buttons) sharing one boundary.
 */
export interface InputGroupProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function InputGroup(props: InputGroupProps): JSX.Element;
export declare function InputGroupAddon(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function InputGroupButton(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function InputGroupText(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function InputGroupInput(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function InputGroupTextarea(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
