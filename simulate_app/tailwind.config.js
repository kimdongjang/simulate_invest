const colors = require("tailwindcss/colors");
module.exports = {
content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./chart/**/*.{js,ts,jsx,tsx}",
    ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        chartGray: { default: "#17181e" },
        chartLightGray: { default: "#8b8b8e" },
      },
    },
  },
  variants: {},
  plugins: [],
};