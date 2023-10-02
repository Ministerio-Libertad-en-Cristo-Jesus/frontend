/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueI: '#14213d',
        whiteI: '#e5e5e5',
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

