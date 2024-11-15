/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: 'Space Mono'
      },
      colors: {
        primary: '#7298f8',
        secondary: '#b5caff'
      }
    },
  },
  plugins: [],
}

