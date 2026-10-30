import * as React from "react";

/**
 * Work listing where each card is one link: media, truncated h4 title, description, outline tags.
 */
export interface ProjectGridProps {
  /** offsets even items so the two columns drift */ stagger?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export declare function ProjectGrid(props: ProjectGridProps): JSX.Element;
export declare function ProjectCard(props: { className?: string; children?: React.ReactNode; [key: string]: any }): JSX.Element;
