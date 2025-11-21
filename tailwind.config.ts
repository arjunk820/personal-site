import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FA",
        primary: {
          text: "#3E2723",
        },
        secondary: {
          text: "#5D4E46",
        },
        button: {
          bg: "#3E2723",
          text: "#F8F9FA",
          hover: "#2A1810",
        },
        accent: "#5D4E46",
      },
      fontFamily: {
        heading: ["Share Tech", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

