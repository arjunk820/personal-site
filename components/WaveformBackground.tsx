"use client";

import { useEffect, useRef } from "react";

const BARS = 72;

/**
 * Animated spectrum-analyser backdrop for DJ mode. Purely decorative — it is
 * not driven by audio. Freezes as a static frame under reduced motion.
 */
export default function WaveformBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const gap = 4;
      const barWidth = Math.max(2, width / BARS - gap);
      const centerY = height * 0.62;

      for (let i = 0; i < BARS; i++) {
        // Layered sines give an irregular, music-like envelope.
        const envelope =
          Math.sin(t * 0.9 + i * 0.32) * 0.5 +
          Math.sin(t * 1.7 + i * 0.11) * 0.3 +
          Math.sin(t * 0.4 + i * 0.71) * 0.2;
        const h = (0.18 + Math.abs(envelope) * 0.82) * height * 0.28;
        const x = i * (barWidth + gap);
        const hue = 180 + (i / BARS) * 130; // cyan → magenta

        const grad = ctx.createLinearGradient(0, centerY - h, 0, centerY + h);
        grad.addColorStop(0, `hsla(${hue}, 100%, 62%, 0.02)`);
        grad.addColorStop(0.5, `hsla(${hue}, 100%, 62%, 0.34)`);
        grad.addColorStop(1, `hsla(${hue}, 100%, 62%, 0.02)`);

        ctx.fillStyle = grad;
        ctx.fillRect(x, centerY - h, barWidth, h * 2);
      }

      if (!reduced) {
        t += 0.016;
        frame = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
