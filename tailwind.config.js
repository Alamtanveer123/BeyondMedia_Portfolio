/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: {
          DEFAULT: '#111111',
          light: '#181818',
          border: '#222222',
          hover: '#262626'
        },
        brand: {
          red: '#E50920',
          'red-hover': '#ff1e36',
          'red-dark': '#9b0615',
          'red-glow': 'rgba(229, 9, 32, 0.25)',
          gold: '#C5A44D',
          'gold-light': '#DFC16C',
          'gold-dark': '#8A7030',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 25px -5px rgba(229, 9, 32, 0.4)',
        'red-glow-lg': '0 0 50px -10px rgba(229, 9, 32, 0.5)',
        'gold-glow': '0 0 25px -5px rgba(197, 164, 77, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
