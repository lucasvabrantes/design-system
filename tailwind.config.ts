import type { Config } from "tailwindcss";
import { colors } from "./components/ui/colors";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      borderWidth: {
        "1": "1px",
      },
      spacing: {
        "1": "0.5rem",
        "2": "1rem",
        "3": "1.5rem",
        "4": "2rem",
        "5": "2.5rem",
        "6": "3rem",
        "7": "3.5rem",
        "8": "4rem",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
