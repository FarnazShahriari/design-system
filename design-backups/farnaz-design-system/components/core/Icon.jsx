import * as React from "react";

export const cx = (...a) => a.filter(Boolean).join(" ");

const LUCIDE = "https://unpkg.com/lucide-static@0.469.0/icons/";
const svgCache = {};
function loadIcon(name) {
  if (!svgCache[name]) svgCache[name] = fetch(LUCIDE + name + ".svg").then((r) => (r.ok ? r.text() : "")).catch(() => "");
  return svgCache[name];
}

/** Lucide icon, inlined so --stroke-icon (2.25) reaches it. name is kebab-case: "arrow-right". */
export function Icon({ name, size, strokeWidth, className, style, ...rest }) {
  const [svg, setSvg] = React.useState("");
  React.useEffect(() => {
    let live = true;
    loadIcon(name).then((t) => live && setSvg(t));
    return () => { live = false; };
  }, [name]);
  const s = Object.assign({}, size ? { width: size, height: size } : null, strokeWidth ? { "--stroke-icon": strokeWidth } : null, style);
  return <span aria-hidden="true" data-icon={name} className={cx("ds-icon", className)} style={s} dangerouslySetInnerHTML={{ __html: svg }} {...rest} />;
}

/** Close on outside pointer-down and Escape. */
export function useDismiss(open, close, ref) {
  React.useEffect(() => {
    if (!open) return;
    const down = (e) => { if (ref.current && !ref.current.contains(e.target)) close(); };
    const key = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("mousedown", down);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("mousedown", down); document.removeEventListener("keydown", key); };
  }, [open]);
}

/** Controlled-or-uncontrolled state helper. */
export function useControllable(value, defaultValue, onChange) {
  const [inner, setInner] = React.useState(defaultValue);
  const isCtl = value !== undefined;
  const v = isCtl ? value : inner;
  const set = (next) => { const n = typeof next === "function" ? next(v) : next; if (!isCtl) setInner(n); onChange && onChange(n); };
  return [v, set];
}

/** Trigger renderer: with asChild, merges props into the single child element; otherwise renders a bare button. */
export function renderTrigger(asChild, children, props) {
  if (asChild && React.isValidElement(children)) {
    const own = children.props;
    const merged = Object.assign({}, props);
    Object.keys(props).forEach((k) => {
      if (/^on[A-Z]/.test(k) && typeof own[k] === "function") merged[k] = (e) => { own[k](e); props[k](e); };
    });
    return React.cloneElement(children, merged);
  }
  return <button type="button" className="ds-trigger" {...props}>{children}</button>;
}
