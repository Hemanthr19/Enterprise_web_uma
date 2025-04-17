/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCE1A',
        'secondary': '#0D0842',
        'blackBG': '#FFFFFF',
        'favourite': '#0D0842'
      },
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["Nunito Sans", "sans-serif"]
      },
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'scroll-right': 'scroll-right 15s linear infinite',
      },
    },
  },
  plugins: [],
}



