/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgb(1, 4, 2)'
      },
      colors: {
        "bakgrund": "rgb(15 22 36 / var(--tw-bg-opacity))",
      }
    },
  },
  plugins: [],
}

