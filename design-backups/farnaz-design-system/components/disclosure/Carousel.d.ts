import * as React from "react";

/**
 * Horizontally paged media with pill arrow buttons.
 */
export interface CarouselProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function Carousel(props: CarouselProps): JSX.Element;
export declare function CarouselContent(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CarouselItem(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CarouselPrevious(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
export declare function CarouselNext(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
