import * as React from "react";
import { cx, Icon } from "../core/Icon.jsx";
import { Dialog, DialogContent } from "../overlays/Dialog.jsx";

const Ctx = React.createContext(null);

/** Filterable command list. Items match on their value (or text). Arrow keys + Enter navigate. */
export function Command({ className, children, ...props }) {
  const [query, setQuery] = React.useState("");
  const [sel, setSel] = React.useState(0);
  const ref = React.useRef(null);
  const items = () => Array.from(ref.current ? ref.current.querySelectorAll("[data-cmd-item]:not([hidden])") : []);
  React.useLayoutEffect(() => {
    const list = items();
    list.forEach((el, i) => (i === sel ? el.setAttribute("data-selected", "") : el.removeAttribute("data-selected")));
    ref.current.querySelectorAll("[data-cmd-group]").forEach((g) => { g.hidden = !g.querySelector("[data-cmd-item]:not([hidden])"); });
    const empty = ref.current.querySelector("[data-cmd-empty]");
    if (empty) empty.hidden = list.length > 0;
  });
  const onKeyDown = (e) => {
    const n = items().length;
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => (s + 1) % Math.max(n, 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => (s - 1 + n) % Math.max(n, 1)); }
    if (e.key === "Enter") { const el = items()[sel]; el && el.click(); }
  };
  return <div ref={ref} data-slot="command" className={cx("ds-command", className)} onKeyDown={onKeyDown} {...props}><Ctx.Provider value={{ query, setQuery: (q) => { setQuery(q); setSel(0); }, setSel, items }}>{children}</Ctx.Provider></div>;
}
export function CommandInput({ className, placeholder = "Type a command or search...", ...props }) {
  const c = React.useContext(Ctx);
  return <div className="ds-command-input-wrap" data-slot="command-input-wrapper"><Icon name="search" /><input data-slot="command-input" className={cx("ds-command-input", className)} placeholder={placeholder} value={c.query} onChange={(e) => c.setQuery(e.target.value)} {...props} /></div>;
}
export function CommandList({ className, ...props }) { return <div role="listbox" data-slot="command-list" className={cx("ds-command-list", className)} {...props} />; }
export function CommandEmpty({ className, ...props }) { return <div data-cmd-empty="" data-slot="command-empty" className={cx("ds-command-empty", className)} hidden {...props} />; }
export function CommandGroup({ heading, className, children, ...props }) {
  return <div data-cmd-group="" data-slot="command-group" className={cx("ds-command-group", className)} {...props}>{heading ? <div className="ds-command-group-heading">{heading}</div> : null}{children}</div>;
}
export function CommandSeparator({ className, ...props }) { return <div data-slot="command-separator" className={cx("ds-menu-sep", className)} style={{ margin: "0 -4px" }} {...props} />; }
function textOf(n) { return typeof n === "string" || typeof n === "number" ? String(n) : Array.isArray(n) ? n.map(textOf).join(" ") : n && n.props ? textOf(n.props.children) : ""; }
export function CommandItem({ value, onSelect, className, children, ...props }) {
  const c = React.useContext(Ctx);
  const text = (value || textOf(children)).toLowerCase();
  const hidden = c.query && !text.includes(c.query.toLowerCase());
  return <div role="option" data-cmd-item="" data-slot="command-item" hidden={hidden} className={cx("ds-menu-item ds-command-item", className)}
    onMouseMove={(e) => c.setSel(c.items().indexOf(e.currentTarget))} onClick={() => onSelect && onSelect(value || text)} {...props}>{children}</div>;
}
export function CommandShortcut({ className, ...props }) { return <span className={cx("ds-menu-shortcut", className)} {...props} />; }
export function CommandDialog({ open, onOpenChange, children }) {
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent showCloseButton={false} style={{ padding: 0, overflow: "hidden" }}><Command>{children}</Command></DialogContent></Dialog>;
}
