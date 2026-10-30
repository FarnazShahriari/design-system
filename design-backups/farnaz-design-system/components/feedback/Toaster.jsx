import * as React from "react";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../actions/Button.jsx";

const listeners = new Set();
let seq = 0;
const ICONS = { success: "circle-check", info: "info", warning: "triangle-alert", error: "octagon-x", loading: "loader-circle" };

function emit(t) { listeners.forEach((l) => l(t)); return t.id; }
/** toast("Saved") · toast.success(...) · toast.error(...) — options: { description, action: { label, onClick }, duration } */
function toast(title, opts) { return emit(Object.assign({ id: ++seq, title, type: "default" }, opts)); }
["success", "info", "warning", "error", "loading"].forEach((k) => { toast[k] = (title, opts) => toast(title, Object.assign({}, opts, { type: k })); });

export function Toaster({ duration = 4000 }) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const on = (t) => {
      setItems((l) => [...l, t].slice(-3));
      setTimeout(() => setItems((l) => l.filter((i) => i.id !== t.id)), t.duration || duration);
    };
    listeners.add(on);
    return () => listeners.delete(on);
  }, []);
  return (
    <section aria-label="Notifications" className="ds-toaster">
      {items.map((t) => (
        <div key={t.id} role="status" className="ds-toast" data-type={t.type}>
          {ICONS[t.type] ? <Icon name={ICONS[t.type]} className={t.type === "loading" ? "ds-spinner" : undefined} /> : null}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div className="ds-toast-title">{t.title}</div>
            {t.description ? <div className="ds-toast-description">{t.description}</div> : null}
          </div>
          {t.action ? <Button size="xs" className="ds-toast-action" onClick={t.action.onClick}>{t.action.label}</Button> : null}
        </div>
      ))}
    </section>
  );
}
Toaster.toast = toast;
if (typeof window !== "undefined") window.dsToast = toast;
