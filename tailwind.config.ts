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
        bone: "#F2EBE5",
        ink: "#2B262D",
        dusk: "#647295",
        rose: "#9F496E",
        sage: "#94A7AE",
        mauve: "#C0A9BD",
        cream: "#F4F2F3",
        "ink-light": "#5A5360",
        "ink-muted": "#8A8490",
        "bone-hover": "#EDE5DE",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(46px, 6.5vw, 78px)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(36px, 4.5vw, 56px)", { lineHeight: "1.1" }],
        "display-md": ["clamp(28px, 3.5vw, 44px)", { lineHeight: "1.14" }],
        "display-sm": ["clamp(22px, 2.5vw, 30px)", { lineHeight: "1.2" }],
      },
      spacing: {
        "section": "90px",
        "section-sm": "60px",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;