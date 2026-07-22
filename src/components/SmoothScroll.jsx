import React, { useEffect, useRef, useState, useCallback } from "react";

export function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const state = useRef({
    current: 0,
    target: 0,
    ease: 0.09,
    rafId: null,
    lastTime: 0,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleAnchorClick = useCallback((e) => {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;

    const anchor = e.target.closest("a[href^='#']");
    if (!anchor) return;

    const id = anchor.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();

    const top = el.offsetTop;
    window.scrollTo({ top, behavior: "instant" });

    state.current.target = top;
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const syncHeight = () => {
      document.body.style.height = container.scrollHeight + "px";
    };

    syncHeight();

    const ro = new ResizeObserver(syncHeight);
    ro.observe(container);

    const onScroll = () => {
      state.current.target = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    state.current.lastTime = performance.now();

    const tick = (time) => {
      const s = state.current;
      const dt = Math.min(64, time - s.lastTime);

      s.lastTime = time;

      const delta = s.target - s.current;
      const frameMs = 1000 / 60;
      const k = 1 - Math.pow(1 - s.ease, dt / frameMs);

      s.current += delta * k;

      if (Math.abs(delta) < 0.1) {
        s.current = s.target;
      }

      container.style.transform = `translateY(-${s.current}px)`;
      s.rafId = requestAnimationFrame(tick);
    };

    state.current.rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(state.current.rafId);
      ro.disconnect();
      document.body.style.height = "";
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div ref={containerRef} onClick={handleAnchorClick}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onClick={handleAnchorClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export default SmoothScroll;
