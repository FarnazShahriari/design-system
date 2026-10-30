import * as React from "react";
import { cx, Icon, renderTrigger, useControllable } from "../core/Icon.jsx";

const Ctx = React.createContext(null);

export function Sheet({ open, defaultOpen = false, onOpenChange, children }) {
  const [o, setO] = useControllable(open, defaultOpen, onOpenChange);
  return <Ctx.Provider value={{ open: o, setOpen: setO }}>{children}</Ctx.Provider>;
}
export function SheetTrigger({ asChild, children, ...props }) {
  const c = React.useContext(Ctx);
  return renderTrigger(asChild, children, Object.assign({ onClick: () => c.setOpen(true) }, props));
}
export function SheetClose({ asChild, children, ...props }) {
  const c = React.useContext(Ctx);
  return renderTrigger(asChild, children, Object.assign({ onClick: () => c.setOpen(false) }, props));
}
export function SheetContent({ side = "right", className, children, ...props }) {
  const c = React.useContext(Ctx);
  if (!c.open) return null;
  return (
    <>
      <div className="ds-overlay" onClick={() => c.setOpen(false)} />
      <div role="dialog" aria-modal="true" data-slot="sheet-content" className={cx("ds-sheet", "ds-sheet--" + side, className)} {...props}>
        {children}
        <button type="button" className="ds-dialog-close" onClick={() => c.setOpen(false)} aria-label="Close"><Icon name="x" /></button>
      </div>
    </>
  );
}
export function SheetHeader({ className, ...props }) { return <div data-slot="sheet-header" className={cx("ds-sheet-header", className)} {...props} />; }
export function SheetFooter({ className, ...props }) { return <div data-slot="sheet-footer" className={cx("ds-sheet-footer", className)} {...props} />; }
export function SheetTitle({ className, ...props }) { return <h2 data-slot="sheet-title" className={cx("ds-sheet-title", className)} {...props} />; }
export function SheetDescription({ className, ...props }) { return <p data-slot="sheet-description" className={cx("ds-dialog-description", className)} {...props} />; }
