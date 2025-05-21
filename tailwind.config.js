/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#F0F7FF',
        text: {
          primary: '#1A1A1A',
          secondary: '#666666'
        }
      }
    },
  },
  plugins: [],
} 