import * as React from "react";

/**
 * Custom listbox select for short option sets.
 */
export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Select(props: SelectProps): JSX.Element;
export declare function SelectTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SelectValue(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SelectContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SelectGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SelectLabel(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SelectItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SelectSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
