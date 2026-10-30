import * as React from "react";

/**
 * Multi-line text input; grows with content.
 */
export interface TextareaProps {
  placeholder?: string;
  rows?: number;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  className?: string;
  [key: string]: any;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
