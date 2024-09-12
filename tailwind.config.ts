import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          high: "var(--dark-high)",
          mid: "var(--dark-mid)",
          low: "var(--dark-low)",
          min: "var(--dark-min)",
        },
        neutral: "var(--neutral)",
        light: {
          high: "var(--light-high)",
          mid: "var(--light-mid)",
          low: "var(--light-low)",
          min: "var(--light-min)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
