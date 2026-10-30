import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Kbd({ className, ...props }) { return <kbd data-slot="kbd" className={cx("ds-kbd", className)} {...props} />; }
export function KbdGroup({ className, ...props }) { return <kbd data-slot="kbd-group" className={cx("ds-kbd-group", className)} {...props} />; }
