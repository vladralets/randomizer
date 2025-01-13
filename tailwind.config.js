/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        orchid: "#DA70D6",
        coral: "#FF7F50",
      },
      screens: {
        'xl': { 'max': '1536px' },
        'lg': { 'max': '1280px' },
        'md': { 'max': '1024px' },
        'sm': { 'max': '768px' },
        'xs': { 'max': '640px' },
      },
    },
  },
  plugins: [],
}

