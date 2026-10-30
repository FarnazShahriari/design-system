import * as React from "react";

/**
 * Edge-anchored panel — mobile navigation, filters. SheetContent side="left|right|top|bottom".
 */
export interface SheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (v: boolean) => void;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Sheet(props: SheetProps): JSX.Element;
export declare function SheetTrigger(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SheetClose(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SheetContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SheetHeader(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SheetFooter(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SheetTitle(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function SheetDescription(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
