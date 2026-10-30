import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function FieldSet({ className, ...props }) { return <fieldset data-slot="field-set" className={cx("ds-fieldset", className)} {...props} />; }
export function FieldLegend({ variant = "legend", className, ...props }) { return <legend data-slot="field-legend" data-variant={variant} className={cx("ds-field-legend", variant === "label" && "ds-field-legend--label", className)} {...props} />; }
export function FieldGroup({ className, ...props }) { return <div data-slot="field-group" className={cx("ds-field-group", className)} {...props} />; }
export function Field({ orientation = "vertical", invalid, disabled, className, ...props }) {
  return <div role="group" data-slot="field" data-orientation={orientation} data-invalid={invalid ? "true" : undefined} data-disabled={disabled ? "true" : undefined}
    className={cx("ds-field", orientation === "horizontal" ? "ds-field--horizontal" : "ds-field--vertical", className)} {...props} />;
}
export function FieldContent({ className, ...props }) { return <div data-slot="field-content" className={cx("ds-field-content", className)} {...props} />; }
export function FieldLabel({ className, ...props }) { return <label data-slot="field-label" className={cx("ds-label", className)} style={{ lineHeight: 1.375 }} {...props} />; }
export function FieldTitle({ className, ...props }) { return <div data-slot="field-label" className={cx("ds-label", className)} style={{ lineHeight: 1.375 }} {...props} />; }
export function FieldDescription({ className, ...props }) { return <p data-slot="field-description" className={cx("ds-field-description", className)} {...props} />; }
export function FieldError({ className, children, errors, ...props }) {
  const content = children || (errors && errors.length ? errors.map((e) => e && e.message).filter(Boolean).join(", ") : null);
  if (!content) return null;
  return <div role="alert" data-slot="field-error" className={cx("ds-field-error", className)} {...props}>{content}</div>;
}
export function FieldSeparator({ children, className, ...props }) {
  return (
    <div data-slot="field-separator" className={cx("ds-field-sep", className)} {...props}>
      <div className="ds-separator" data-orientation="horizontal" />
      {children ? <span>{children}</span> : null}
    </div>
  );
}
