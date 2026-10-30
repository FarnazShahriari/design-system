import * as React from "react";

/**
 * Switch between views in the same place. TabsList variant="line" for an underline style.
 */
export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Tabs(props: TabsProps): JSX.Element;
export declare function TabsList(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TabsTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function TabsContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
