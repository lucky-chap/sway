/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-1000': '#050505',
        gray: colors.neutral
      }
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans]
    },
    keyframes: {
      overlayShow: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      }
    },
    animation: {
      overlayShow: 'overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
