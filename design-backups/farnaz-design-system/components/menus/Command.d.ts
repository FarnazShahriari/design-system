import * as React from "react";

/**
 * Searchable command palette / combobox list.
 */
export interface CommandProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Command(props: CommandProps): JSX.Element;
export declare function CommandInput(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CommandList(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CommandEmpty(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CommandGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CommandItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CommandSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CommandShortcut(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CommandDialog(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
