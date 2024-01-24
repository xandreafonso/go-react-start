/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#292929',
        background: '#1E1E1E',
        main: '#6597E1',
        highlight: '#FFDE59'
      }
    },
  },
  plugins: [],
}