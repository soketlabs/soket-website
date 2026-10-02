import { Children, isValidElement, useEffect, useRef } from "react";

/**
 * Magnetic bento hover — one shared indicator slides/resizes behind the
 * hovered card. Uses geometry + CSS transitions so the slide stays continuous
 * even across grid gaps (pure CSS :hover drops the anchor in the gap).
 */
export default function MagneticBento({ children, className = "" }) {
  const rootRef = useRef(null);
  const indicatorRef = useRef(null);
  const activeRef = useRef(null);

  const moveTo = (target) => {
    const root = rootRef.current;
    const indicator = indicatorRef.current;
    if (!root || !indicator || !target) return;

    const isFirst = !activeRef.current;
    activeRef.current = target;

    const rootRect = root.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    const next = {
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transform: `translate(${rect.left - rootRect.left}px, ${rect.top - rootRect.top}px)`,
    };

    // Snap on first enter so it doesn't grow from 0×0 at the origin
    if (isFirst) {
      indicator.style.transition = "none";
      Object.assign(indicator.style, next);
      void indicator.offsetWidth;
      indicator.style.transition = "";
      indicator.style.opacity = "1";
      return;
    }

    Object.assign(indicator.style, next);
    indicator.style.opacity = "1";
  };

  const hide = () => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    activeRef.current = null;
    indicator.style.opacity = "0";
  };

  // Keep indicator aligned on resize/scroll while a card is active
  useEffect(() => {
    const sync = () => {
      if (activeRef.current) moveTo(activeRef.current);
    };
    window.addEventListener("resize", sync);
    window.addEventListener("scroll", sync, true);
    return () => {
      window.removeEventListener("resize", sync);
      window.removeEventListener("scroll", sync, true);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="magnetic-bento"
      onMouseLeave={hide}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) hide();
      }}
    >
      <span ref={indicatorRef} className="magnetic-bento__indicator" aria-hidden="true" />
      <ul className={`magnetic-bento__list ${className}`.trim()}>
        {Children.map(children, (child, index) => {
          if (child == null || child === false) return null;
          const key = isValidElement(child) && child.key != null ? child.key : index;
          return (
            <li
              key={key}
              className="magnetic-bento__item"
              onMouseEnter={(event) => {
                const target = event.currentTarget.firstElementChild;
                if (target) moveTo(target);
              }}
              onFocus={(event) => {
                const target = event.currentTarget.firstElementChild;
                if (target) moveTo(target);
              }}
            >
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
