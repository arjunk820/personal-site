"use client";

import { useEffect, useRef } from "react";

interface WaveformBackgroundProps {
  variant: "engineer" | "dj";
}

export default function WaveformBackground({ variant }: WaveformBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Sharp, angular, geometric waveform (same style for both modes)
      const segments = 20;
      const segmentWidth = canvas.width / segments;
      const amplitude = 80;
      const centerY = canvas.height / 2;

      if (variant === "engineer") {
        ctx.strokeStyle = "rgba(61, 39, 35, 0.08)"; // primary-text with low opacity
        ctx.lineWidth = 2;
      } else {
        // Bright colors for DJ mode on dark background
        ctx.strokeStyle = "rgba(0, 255, 255, 0.4)"; // Cyan
        ctx.lineWidth = 2;
      }

      // Main waveform line
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const x = i * segmentWidth;
        const noise = Math.sin(time * 0.5 + i * 0.3) * Math.cos(time * 0.3 + i * 0.2);
        const y = centerY + noise * amplitude;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Grid-like vertical lines
      for (let i = 0; i <= segments; i++) {
        const x = i * segmentWidth;
        const lineHeight = 30 + Math.sin(time * 0.4 + i * 0.5) * 20;
        
        if (variant === "dj") {
          // Use different bright colors for vertical lines
          const colors = [
            "rgba(255, 0, 255, 0.3)", // Magenta
            "rgba(255, 255, 0, 0.3)", // Yellow
            "rgba(0, 255, 255, 0.3)", // Cyan
          ];
          ctx.strokeStyle = colors[i % colors.length];
        }
        
        ctx.beginPath();
        ctx.moveTo(x, centerY - lineHeight);
        ctx.lineTo(x, centerY + lineHeight);
        ctx.stroke();
      }

      time += 0.02;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: variant === "dj" ? "screen" : "multiply" }}
    />
  );
}

