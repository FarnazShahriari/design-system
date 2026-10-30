import * as React from "react";
import { cx } from "../core/Icon.jsx";

/** Scroll reveal — fade (0.9s) and rise (16px, 1.2s), ease-out-expo, fires once. */
export function Reveal({ variant = "rise-fade", delay = 0, className, style, ...props }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} data-slot="reveal" data-variant={variant} data-shown={shown ? "true" : "false"} className={cx("ds-reveal", className)} style={Object.assign({ transitionDelay: delay + "s" }, style)} {...props} />;
}
/** Staggers direct children by step seconds. Don't use on long grids. */
export function RevealGroup({ step = 0.06, variant = "rise-fade", children, ...props }) {
  return <div data-slot="reveal-group" {...props}>{React.Children.map(children, (c, i) => <Reveal variant={variant} delay={i * step}>{c}</Reveal>)}</div>;
}
