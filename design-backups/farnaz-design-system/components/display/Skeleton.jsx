import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Skeleton({ className, ...props }) { return <div data-slot="skeleton" className={cx("ds-skeleton", className)} {...props} />; }
