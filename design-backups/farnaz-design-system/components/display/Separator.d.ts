import * as React from "react";

/**
 * A visible 1px rule in --border. Not to be confused with Divider (empty rhythm).
 */
export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  className?: string;
  [key: string]: any;
}
export declare function Separator(props: SeparatorProps): JSX.Element;
