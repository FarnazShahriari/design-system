import * as React from "react";
import { cx, Icon } from "../core/Icon.jsx";

export function NativeSelect({ size = "default", className, ...props }) {
  return (
    <div className="ds-native-select-wrap" data-slot="native-select-wrapper">
      <select data-slot="native-select" data-size={size} className={cx("ds-native-select", size === "sm" && "ds-native-select--sm", className)} {...props} />
      <Icon name="chevron-down" />
    </div>
  );
}
export function NativeSelectOption(props) { return <option data-slot="native-select-option" {...props} />; }
export function NativeSelectOptGroup(props) { return <optgroup data-slot="native-select-optgroup" {...props} />; }
