/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        accent: "#FFB800",
        muted: "#666666",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Archivo Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
