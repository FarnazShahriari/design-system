import * as React from "react";

/**
 * Layout wrapper that pairs a control with label, description and error.
 */
export interface FieldProps {
  orientation?: "vertical" | "horizontal";
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Field(props: FieldProps): JSX.Element;
export declare function FieldSet(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function FieldLegend(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function FieldGroup(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function FieldContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function FieldLabel(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function FieldTitle(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function FieldDescription(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function FieldError(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function FieldSeparator(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
