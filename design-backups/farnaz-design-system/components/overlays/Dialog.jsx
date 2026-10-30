import * as React from "react";
import { cx, Icon, renderTrigger, useControllable } from "../core/Icon.jsx";
import { Button } from "../actions/Button.jsx";

export const DialogCtx = React.createContext(null);

export function Dialog({ open, defaultOpen = false, onOpenChange, children }) {
  const [o, setO] = useControllable(open, defaultOpen, onOpenChange);
  React.useEffect(() => {
    if (!o) return;
    const k = (e) => e.key === "Escape" && setO(false);
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [o]);
  return <DialogCtx.Provider value={{ open: o, setOpen: setO }}>{children}</DialogCtx.Provider>;
}
export function DialogTrigger({ asChild, children, ...props }) {
  const c = React.useContext(DialogCtx);
  return renderTrigger(asChild, children, Object.assign({ onClick: () => c.setOpen(true) }, props));
}
export function DialogClose({ asChild, children, ...props }) {
  const c = React.useContext(DialogCtx);
  return renderTrigger(asChild, children, Object.assign({ onClick: () => c.setOpen(false) }, props));
}
export function DialogOverlay({ className, ...props }) {
  const c = React.useContext(DialogCtx);
  return <div data-slot="dialog-overlay" className={cx("ds-overlay", className)} onClick={() => c.setOpen(false)} {...props} />;
}
export function DialogContent({ showCloseButton = true, className, children, ...props }) {
  const c = React.useContext(DialogCtx);
  if (!c.open) return null;
  return (
    <>
      <DialogOverlay />
      <div role="dialog" aria-modal="true" data-slot="dialog-content" className={cx("ds-dialog", className)} {...props}>
        {children}
        {showCloseButton ? <button type="button" className="ds-dialog-close" onClick={() => c.setOpen(false)} aria-label="Close"><Icon name="x" /></button> : null}
      </div>
    </>
  );
}
export function DialogHeader({ className, ...props }) { return <div data-slot="dialog-header" className={cx("ds-dialog-header", className)} {...props} />; }
export function DialogFooter({ showCloseButton = false, className, children, ...props }) {
  const c = React.useContext(DialogCtx);
  return <div data-slot="dialog-footer" className={cx("ds-dialog-footer", className)} {...props}>{children}{showCloseButton ? <Button variant="outline" onClick={() => c.setOpen(false)}>Close</Button> : null}</div>;
}
export function DialogTitle({ className, ...props }) { return <h2 data-slot="dialog-title" className={cx("ds-dialog-title", className)} {...props} />; }
export function DialogDescription({ className, ...props }) { return <p data-slot="dialog-description" className={cx("ds-dialog-description", className)} {...props} />; }
