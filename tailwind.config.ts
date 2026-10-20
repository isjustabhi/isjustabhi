import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--bg)",
          muted: "var(--bg-muted)",
          surface: "var(--surface)",
          elevated: "var(--surface-elevated)",
          line: "var(--line)",
        },
        mist: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          faint: "var(--text-faint)",
        },
        signal: {
          DEFAULT: "var(--cyan)",
          violet: "var(--violet)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "72rem",
      },
      boxShadow: {
        glow: "0 0 0 1px color-mix(in srgb, var(--cyan) 28%, transparent), 0 18px 50px -24px color-mix(in srgb, var(--cyan) 40%, transparent)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
