/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./**/*.{html,ts}",
  ],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        "primary": {
          50: "#D9E5F7",
          100: "#B8CEEF",
          200: "#6D9ADF",
          300: "#2D6BC8",
          400: "#1C437D",
          500: "#0C1D36",
          600: "#09162A",
          700: "#071221",
          800: "#050B15",
          900: "#03070D"
        },
        "secondary": {
          50: "#FEFAE6",
          100: "#FEF5CD",
          200: "#FDEB9B",
          300: "#FBE26F",
          400: "#FAD83D",
          500: "#F9CC0B",
          600: "#CCA805",
          700: "#9A7F04",
          800: "#645202",
          900: "#322901"
        }
      },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
