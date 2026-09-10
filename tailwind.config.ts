import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Google Sans Flex"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        // Primary brand color: deep navy blue.
        brand: {
          DEFAULT: "#13234f", // deep navy
          dark: "#0a1531", // near-black navy
          mid: "#1c3a7a", // lighter navy for gradients
          light: "#eaf1fb", // soft tint for section backgrounds
        },
        // Secondary: sky blue.
        sky: {
          DEFAULT: "#38bdf8",
          dark: "#0284c7",
          light: "#cbe8fb",
        },
        // Accent: bright gold.
        accent: "#f5c518",
        gold: {
          DEFAULT: "#f5c518", // bright, luminous gold
          dark: "#e0af00", // slightly deeper for hover states
          light: "#ffe27a", // soft warm glow
        },
        // Cloud white background + warm-neutral ink scale for text.
        cloud: "#f6f8fc",
        ink: {
          900: "#0a1531",
          700: "#33405c",
          500: "#5a6784",
          300: "#94a0b8",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,21,49,0.04), 0 8px 24px -12px rgba(10,21,49,0.18)",
        lift: "0 2px 4px rgba(10,21,49,0.05), 0 24px 48px -20px rgba(10,21,49,0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
