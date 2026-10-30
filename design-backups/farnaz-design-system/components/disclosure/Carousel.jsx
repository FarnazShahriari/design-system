import * as React from "react";
import { cx, Icon } from "../core/Icon.jsx";
import { Button } from "../actions/Button.jsx";

const Ctx = React.createContext(null);

export function Carousel({ className, children, ...props }) {
  const [index, setIndex] = React.useState(0);
  const [count, setCount] = React.useState(0);
  return (
    <div role="region" aria-roledescription="carousel" data-slot="carousel" className={cx("ds-carousel", className)} {...props}>
      <Ctx.Provider value={{ index, setIndex, count, setCount }}>{children}</Ctx.Provider>
    </div>
  );
}
export function CarouselContent({ className, children, ...props }) {
  const c = React.useContext(Ctx);
  const n = React.Children.count(children);
  React.useEffect(() => { c.setCount(n); }, [n]);
  return (
    <div className="ds-carousel-viewport" data-slot="carousel-content">
      <div className={cx("ds-carousel-track", className)} style={{ transform: "translateX(-" + c.index * 100 + "%)" }} {...props}>{children}</div>
    </div>
  );
}
export function CarouselItem({ className, ...props }) {
  return <div role="group" aria-roledescription="slide" data-slot="carousel-item" className={cx("ds-carousel-item", className)} {...props} />;
}
export function CarouselPrevious({ className, ...props }) {
  const c = React.useContext(Ctx);
  return <Button variant="outline" size="icon-sm" pill className={cx("ds-carousel-btn ds-carousel-prev", className)} disabled={c.index === 0} onClick={() => c.setIndex(c.index - 1)} aria-label="Previous slide" {...props}><Icon name="arrow-left" /></Button>;
}
export function CarouselNext({ className, ...props }) {
  const c = React.useContext(Ctx);
  return <Button variant="outline" size="icon-sm" pill className={cx("ds-carousel-btn ds-carousel-next", className)} disabled={c.index >= c.count - 1} onClick={() => c.setIndex(c.index + 1)} aria-label="Next slide" {...props}><Icon name="arrow-right" /></Button>;
}
