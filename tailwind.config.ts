import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'green': '#3f860a',
        'orange': '#d24605',
        'brown': '#a77010',
        'charcoal': '#404040',
        'light-orange': '#e68c47',
        'light-brown': '#f6f5e2',
        'skyblue': '#dbe9e3',
      },
      fontFamily: {
        'heading': ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
        'body': ['var(--font-body)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
