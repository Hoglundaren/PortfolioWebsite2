/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "bakgrund": "rgb(15 22 36 / var(--tw-bg-opacity))",
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to right, #6366f1 10%, #0ea5e9 30%, #10b981 90%)',
      }
    },
  },
}

