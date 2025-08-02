/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Urbanist', 'sans-serif'],
            teko: ['Teko', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
