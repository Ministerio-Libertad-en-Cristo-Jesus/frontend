/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        3: '0 0 calc(33% - 30px)',
        2: '0 0 calc(50% - 30px)',
        100: '0 0 calc(100% - 30px)'
      },
      colors: {
        blueI: '#14213d',
        whiteI: '#e5e5e5',
        whatsapp: '#39b54a'
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif']
      },
      animation: {
        spinIcon: 'spin 3s linear infinite'
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}

