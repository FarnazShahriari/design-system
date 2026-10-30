import * as React from "react";
import { cx } from "../core/Icon.jsx";

export function Table({ className, ...props }) { return <div data-slot="table-container" className="ds-table-wrap"><table data-slot="table" className={cx("ds-table", className)} {...props} /></div>; }
export function TableHeader(props) { return <thead data-slot="table-header" {...props} />; }
export function TableBody(props) { return <tbody data-slot="table-body" {...props} />; }
export function TableFooter(props) { return <tfoot data-slot="table-footer" {...props} />; }
export function TableRow({ selected, ...props }) { return <tr data-slot="table-row" data-state={selected ? "selected" : undefined} {...props} />; }
export function TableHead(props) { return <th data-slot="table-head" {...props} />; }
export function TableCell(props) { return <td data-slot="table-cell" {...props} />; }
export function TableCaption(props) { return <caption data-slot="table-caption" {...props} />; }
