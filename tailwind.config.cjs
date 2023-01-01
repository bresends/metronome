/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        baseRed: '#fa545c',
      },
      screens: {
        '3xl': '1980px',
      },
    },
  },
  plugins: [],
}
