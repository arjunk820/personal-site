import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black base with a slight cool cast so the amber accent reads warm.
        ink: {
          DEFAULT: "#08080A",
          soft: "#0E0E12",
          raised: "#141419",
        },
        line: {
          DEFAULT: "#23232B",
          soft: "#1A1A20",
        },
        fg: {
          DEFAULT: "#EDEDF0",
          muted: "#8E8E9A",
          faint: "#5B5B66",
        },
        // Amber-phosphor accent — a nod to the old warm palette, legible on black.
        signal: {
          DEFAULT: "#FFB84D",
          soft: "#FFD9A3",
          dim: "#7A5620",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 40s linear infinite",
        blink: "blink 1.2s steps(1) infinite",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
