import type { Config } from "tailwindcss";
import { semantic } from "./src/design-tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        background: semantic.background,
        text: semantic.text,
        brand: {
          DEFAULT: semantic.brand.primary,
          accent: semantic.brand.accent,
          subtle: semantic.brand.subtle,
          light: semantic.brand.subtle,
          dark: semantic.background.dark,
        },
        border: {
          DEFAULT: semantic.border.default,
          strong: semantic.border.strong,
        },
        state: semantic.state,
        // Legacy aliases (used in existing components)
        harbor: semantic.background.primary,
        cream: semantic.background.primary,
        charcoal: semantic.text.primary,
        stone: semantic.border.default,
        gold: {
          DEFAULT: semantic.brand.accent,
          light: "#D4B87A",
          dark: "#A8823E",
        },
        sandstone: "#CBB89D",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "DM Serif Text", "Georgia", "serif"],
        sans:  ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 4.5rem)",  { lineHeight: "1.1"  }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)",   { lineHeight: "1.15" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2"  }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)",{ lineHeight: "1.25" }],
      },
      spacing: {
        "section":    "5rem",
        "section-lg": "8rem",
      },
      maxWidth: {
        "prose-wide": "72ch",
        "container":  "1200px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
      },
    },
  },
  plugins: [],
};

export default config;
