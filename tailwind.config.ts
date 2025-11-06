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
        'bBlue': '#0098cb',
        'bYellow': '#fff12f',
        'charcoal': '#171717',
        'light-gray': '#f4f6f8',
        'coral-red': '#e95353',
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
