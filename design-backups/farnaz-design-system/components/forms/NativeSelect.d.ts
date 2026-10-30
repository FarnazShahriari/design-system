import * as React from "react";

/**
 * Platform <select> styled like Input — prefer on mobile or for long lists.
 */
export interface NativeSelectProps {
  size?: "default" | "sm";
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function NativeSelect(props: NativeSelectProps): JSX.Element;
export declare function NativeSelectOption(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function NativeSelectOptGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
