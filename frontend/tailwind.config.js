/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
