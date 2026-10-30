import * as React from "react";

/**
 * Bordered container for a grouped unit of content. No shadow, 2.8px radius. Put a real heading inside CardHeader rather than restyling CardTitle.
 */
export interface CardProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Card(props: CardProps): JSX.Element;
export declare function CardHeader(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CardTitle(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CardDescription(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CardAction(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CardContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CardFooter(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
