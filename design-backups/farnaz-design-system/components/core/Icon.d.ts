import * as React from "react";

/**
 * Lucide icon rendered inline so the system stroke (--stroke-icon: 2.25) applies; use anywhere the source uses a lucide-react icon.
 */
export interface IconProps {
  name: string;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}
export declare function Icon(props: IconProps): JSX.Element;
