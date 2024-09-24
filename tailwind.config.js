/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#180D49",
        heading: "#0C2898"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
