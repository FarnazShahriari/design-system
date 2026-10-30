import * as React from "react";
import { cx, renderTrigger, useControllable } from "../core/Icon.jsx";
import { Button } from "../actions/Button.jsx";

const Ctx = React.createContext(null);

/** A dialog that interrupts to confirm a consequential action. No close button; the overlay does not dismiss. */
export function AlertDialog({ open, defaultOpen = false, onOpenChange, children }) {
  const [o, setO] = useControllable(open, defaultOpen, onOpenChange);
  return <Ctx.Provider value={{ open: o, setOpen: setO }}>{children}</Ctx.Provider>;
}
export function AlertDialogTrigger({ asChild, children, ...props }) {
  const c = React.useContext(Ctx);
  return renderTrigger(asChild, children, Object.assign({ onClick: () => c.setOpen(true) }, props));
}
export function AlertDialogContent({ size = "default", className, children, ...props }) {
  const c = React.useContext(Ctx);
  if (!c.open) return null;
  return (
    <>
      <div className="ds-overlay" data-slot="alert-dialog-overlay" />
      <div role="alertdialog" aria-modal="true" data-slot="alert-dialog-content" data-size={size} className={cx("ds-dialog", className)} style={size === "sm" ? { maxWidth: "20rem" } : undefined} {...props}>{children}</div>
    </>
  );
}
export function AlertDialogHeader({ className, ...props }) { return <div className={cx("ds-dialog-header", className)} {...props} />; }
export function AlertDialogFooter({ className, ...props }) { return <div className={cx("ds-dialog-footer", className)} {...props} />; }
export function AlertDialogTitle({ className, ...props }) { return <h2 className={cx("ds-dialog-title", className)} {...props} />; }
export function AlertDialogDescription({ className, ...props }) { return <p className={cx("ds-dialog-description", className)} {...props} />; }
export function AlertDialogAction({ onClick, variant = "default", ...props }) {
  const c = React.useContext(Ctx);
  return <Button variant={variant} onClick={(e) => { onClick && onClick(e); c.setOpen(false); }} {...props} />;
}
export function AlertDialogCancel({ onClick, ...props }) {
  const c = React.useContext(Ctx);
  return <Button variant="outline" onClick={(e) => { onClick && onClick(e); c.setOpen(false); }} {...props} />;
}
