import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0A0A0A",
          secondary: "#18181B",
        },
        text: {
          primary: "#FAFAFA",
          secondary: "#A1A1A6",
          tertiary: "#71717A",
        },
        accent: "#F5A524",
        border: "#27272A",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
