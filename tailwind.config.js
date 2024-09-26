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
        heading: "#0C2898",
      },
      animation: {
        'move-gradient-1': 'moveGradient 4s linear ',
        'move-gradient-5': 'moveGradient 4s linear 12s',
        'move-gradient-3': 'moveGradientReverse 4s linear 6s',
        'move-gradient-2': 'moveGradientVertical 2s linear 4s',
        'move-gradient-4': 'moveGradientVertical 2s linear 10s',
      },
      keyframes: {
        moveGradient: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveGradientReverse: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveGradientVertical: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
