import * as React from "react";
import { cx } from "../core/Icon.jsx";
import { Badge } from "../display/Badge.jsx";

/** Work listing: the whole card is one link. No button, no border, no shadow — the media does the work. */
export function ProjectGrid({ stagger = false, className, ...props }) {
  return <ul data-slot="project-grid" className={cx("ds-project-grid", stagger && "ds-project-grid--stagger", className)} {...props} />;
}
export function ProjectCard({ href = "#", title, description, tags, ratio = "4 / 3", media, onClick, className, ...props }) {
  return (
    <li data-slot="project-card" className={cx("ds-project-card", className)} {...props}>
      <a href={href} onClick={onClick}>
        <div className="ds-project-media" style={{ aspectRatio: ratio }}>
          {media || <div className="ds-project-media-fallback text-meta">{title}</div>}
        </div>
        <div className="ds-project-body">
          <h3 className="ds-truncate text-h4">{title}</h3>
          {description ? <p className="ds-truncate text-sm text-muted">{description}</p> : null}
          {tags && tags.length ? <div className="ds-project-tags">{tags.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}</div> : null}
        </div>
      </a>
    </li>
  );
}
