import * as React from "react";
import { cx, Icon, useDismiss, useControllable } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function Select({ value, defaultValue, onValueChange, disabled, children }) {
  const [v, setV] = useControllable(value, defaultValue, onValueChange);
  const [open, setOpen] = React.useState(false);
  const [labels, setLabels] = React.useState({});
  const ref = React.useRef(null);
  useDismiss(open, () => setOpen(false), ref);
  const register = React.useCallback((val, label) => setLabels((l) => (l[val] === label ? l : Object.assign({}, l, { [val]: label }))), []);
  return (
    <Ctx.Provider value={{ v, setV, open, setOpen, labels, register, disabled }}>
      <div ref={ref} className="ds-select" data-slot="select">{children}</div>
    </Ctx.Provider>
  );
}

export function SelectTrigger({ size = "default", className, children, ...props }) {
  const c = React.useContext(Ctx);
  return (
    <button type="button" data-slot="select-trigger" data-size={size} disabled={c.disabled} aria-expanded={c.open}
      data-placeholder={c.v === undefined || c.v === "" ? "" : undefined}
      className={cx("ds-select-trigger", size === "sm" && "ds-select-trigger--sm", className)} onClick={() => c.setOpen(!c.open)} {...props}>
      {children}
      <Icon name="chevron-down" />
    </button>
  );
}

export function SelectValue({ placeholder }) {
  const c = React.useContext(Ctx);
  const label = c.v !== undefined && c.v !== "" ? c.labels[c.v] || c.v : placeholder;
  return <span data-slot="select-value" className="ds-select-value">{label}</span>;
}

export function SelectContent({ className, children, ...props }) {
  const c = React.useContext(Ctx);
  return (
    <div role="listbox" data-slot="select-content" className={cx("ds-popover-surface ds-select-content", className)} style={{ display: c.open ? "block" : "none" }} {...props}>
      {children}
    </div>
  );
}

export function SelectGroup(props) { return <div role="group" data-slot="select-group" {...props} />; }
export function SelectLabel({ className, ...props }) { return <div data-slot="select-label" className={cx("ds-command-group-heading", className)} {...props} />; }
export function SelectSeparator({ className, ...props }) { return <div data-slot="select-separator" className={cx("ds-menu-sep", className)} {...props} />; }

export function SelectItem({ value, disabled, className, children, ...props }) {
  const c = React.useContext(Ctx);
  const label = typeof children === "string" ? children : value;
  React.useEffect(() => { c.register(value, label); }, [value, label]);
  const selected = c.v === value;
  return (
    <div role="option" aria-selected={selected} data-slot="select-item" data-disabled={disabled ? "" : undefined} tabIndex={-1}
      className={cx("ds-menu-item ds-select-item", className)} onClick={() => { c.setV(value); c.setOpen(false); }} {...props}>
      {children}
      {selected ? <Icon name="check" /> : null}
    </div>
  );
}
