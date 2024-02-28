/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#151C29',
        background: '#0C121B',
        main: '#6597E1',
        highlight: '#FFDE59'
      }
    },
  },
  plugins: [],
}