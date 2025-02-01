/** @type {import('tailwindcss').Config} */

import { Montserrat, Poppins } from "next/font/google";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Montserrat: ["Montserrat", "serif"],
    },

    boxShadow: {
      shadowWhite: "2px 2px 0 #cbd5e1",
    },
    gridTemplateColumns: {
      auto: "repeat(auto-fit, minmax(200px, 1fr))",
    },
  },
  plugins: [],
};
