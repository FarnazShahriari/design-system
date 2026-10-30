import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Avatar({ size = "default", className, ...props }) {
  return <span data-slot="avatar" data-size={size} className={cx("ds-avatar", size !== "default" && "ds-avatar--" + size, className)} {...props} />;
}
export function AvatarImage({ className, src, alt = "", ...props }) {
  const [ok, setOk] = React.useState(true);
  if (!src || !ok) return null;
  return <img data-slot="avatar-image" src={src} alt={alt} onError={() => setOk(false)} className={className} style={{ position: "absolute", inset: 0 }} {...props} />;
}
export function AvatarFallback({ className, ...props }) {
  return <span data-slot="avatar-fallback" className={cx("ds-avatar-fallback", className)} {...props} />;
}
export function AvatarBadge({ className, ...props }) {
  return <span data-slot="avatar-badge" className={cx("ds-avatar-badge", className)} {...props} />;
}
export function AvatarGroup({ className, ...props }) {
  return <div data-slot="avatar-group" className={cx("ds-avatar-group", className)} {...props} />;
}
export function AvatarGroupCount({ className, ...props }) {
  return <div data-slot="avatar-group-count" className={cx("ds-avatar-count", className)} {...props} />;
}
