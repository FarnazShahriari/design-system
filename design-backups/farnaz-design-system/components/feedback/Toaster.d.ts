import * as React from "react";

/**
 * Transient notifications (sonner-style). Mount once, then call Toaster.toast("Saved") or window.dsToast.success(...).
 */
export interface ToasterProps {
  /** ms;
  default 4000 */ duration?: number;
  [key: string]: any;
}
export declare function Toaster(props: ToasterProps): JSX.Element;
