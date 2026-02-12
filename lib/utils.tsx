import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el: HTMLDivElement | null = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(
            el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
            e.deltaY > 0
          )
        ) {
          e.preventDefault();
        }
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
        });
      };
      el.addEventListener("wheel", onWheel);

      const dragStart = (ev: PointerEvent) =>
        el.setPointerCapture(ev.pointerId);
      const dragEnd = (ev: PointerEvent) =>
        el.releasePointerCapture(ev.pointerId);
      const drag = (ev: PointerEvent) =>
        el.hasPointerCapture(ev.pointerId) && (el.scrollLeft -= ev.movementX);

      el.addEventListener("pointerdown", dragStart);
      el.addEventListener("pointerup", dragEnd);
      el.addEventListener("pointermove", drag);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
