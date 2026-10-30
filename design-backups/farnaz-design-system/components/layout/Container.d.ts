import * as React from "react";

/**
 * The only element that sets horizontal insets (24px → 40px at 768px; 1400px / 52rem / none).
 */
export interface ContainerProps {
  width?: "default" | "narrow" | "wide";
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Container(props: ContainerProps): JSX.Element;
