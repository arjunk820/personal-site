"use client";

import { useEffect, useRef } from "react";

const GRID =
  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)," +
  "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)";

const GRID_HOT =
  "linear-gradient(to right, rgba(255,184,77,0.55) 1px, transparent 1px)," +
  "linear-gradient(to bottom, rgba(255,184,77,0.55) 1px, transparent 1px)";

/**
 * Fixed engineering-grid backdrop with a cursor spotlight that lights the grid
 * amber where the pointer is. Pointer tracking is skipped on coarse-pointer
 * devices and under reduced motion, leaving the static grid.
 */
export default function GridBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const skip =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    if (skip) return;

    let frame = 0;

    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.opacity = "1";
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base grid, faded out toward the edges so it never fights the content. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: GRID,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 100% 70% at 50% 0%, #000 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 70% at 50% 0%, #000 20%, transparent 78%)",
        }}
      />

      {/* Amber glow behind the hero. */}
      <div
        className="absolute -top-56 left-1/2 h-[42rem] w-[70rem] -translate-x-1/2 animate-drift rounded-full opacity-[0.16] blur-[120px]"
        style={{ background: "radial-gradient(circle, #FFB84D 0%, transparent 68%)" }}
      />

      {/* Cursor spotlight — same grid, amber, masked to a soft disc at the pointer. */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage: GRID_HOT,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(220px circle at var(--mx, -999px) var(--my, -999px), #000 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(220px circle at var(--mx, -999px) var(--my, -999px), #000 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
