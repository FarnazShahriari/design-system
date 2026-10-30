import * as React from "react";

/**
 * Numeric value or range along a track.
 */
export interface SliderProps {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (v: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
  [key: string]: any;
}
export declare function Slider(props: SliderProps): JSX.Element;
