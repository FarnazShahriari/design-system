import * as React from "react";
import { cx, useControllable } from "../core/Icon.jsx";

/** value is an array: one entry = single thumb, two = range. */
export function Slider({ value, defaultValue, onValueChange, min = 0, max = 100, step = 1, disabled, className, ...props }) {
  const [vals, setVals] = useControllable(value, defaultValue || [min], onValueChange);
  const ref = React.useRef(null);
  const pct = (x) => ((x - min) / (max - min)) * 100;
  const fromEvent = (e) => {
    const r = ref.current.getBoundingClientRect();
    const raw = min + Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * (max - min);
    return Math.round(raw / step) * step;
  };
  const onDown = (e) => {
    if (disabled) return;
    const x = fromEvent(e);
    const idx = vals.length === 1 ? 0 : Math.abs(vals[0] - x) <= Math.abs(vals[1] - x) ? 0 : 1;
    const update = (val) => setVals((cur) => { const n = cur.slice(); n[idx] = val; return n.sort((a, b) => a - b); });
    update(x);
    const move = (ev) => update(fromEvent(ev));
    const up = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  const lo = vals.length === 1 ? min : vals[0];
  const hi = vals.length === 1 ? vals[0] : vals[1];
  return (
    <div ref={ref} data-slot="slider" data-disabled={disabled ? "" : undefined} className={cx("ds-slider", className)} onPointerDown={onDown} {...props}>
      <div className="ds-slider-track"><div className="ds-slider-range" style={{ left: pct(lo) + "%", width: pct(hi) - pct(lo) + "%" }} /></div>
      {vals.map((v, i) => <span key={i} role="slider" tabIndex={0} aria-valuenow={v} aria-valuemin={min} aria-valuemax={max} className="ds-slider-thumb" style={{ left: pct(v) + "%" }} />)}
    </div>
  );
}
