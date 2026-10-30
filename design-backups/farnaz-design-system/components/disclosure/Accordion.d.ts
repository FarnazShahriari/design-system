import * as React from "react";

/**
 * Stacked disclosure sections, e.g. FAQs.
 */
export interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (v: any) => void;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
export declare function AccordionItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AccordionTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function AccordionContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
