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
        "clr-base-bg": "hsl(0, 3, 6, 100)",
        "clr-header-bg": "hsl(0, 0, 9)",
        "clr-footer-bg": "hsl(0, 0, 10)",
        "clr-footer-btn": "hsl(0, 0, 8)",
        "clr-input-bg": "hsl(0, 0, 6)",
        "clr-border": "hsl(0, 0, 17)",
        "clr-primary": "hsl(var(--clr-primary))",
        "clr-primary-txt": "hsl(var(--clr-primary-text))",
        "clr-pwr": "hsl(var(--clr-power))",
      },
      fontFamily: {
        sans: ["var(--font-neue-montreal)"],
        display: ["var(--font-bric)"],
        cursive: ["var(--font-oldschool)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
