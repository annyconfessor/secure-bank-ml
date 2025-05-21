/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // Modern indigo
          light: '#EEF2FF',   // Light indigo background
        },
        secondary: {
          DEFAULT: '#F4F7FF', // Light blue-gray
          dark: '#64748B',    // Slate gray
        },
        success: '#10B981',   // Modern green
        warning: '#FBBF24',   // Modern yellow
        danger: '#EF4444',    // Modern red
        background: '#FAFAFA', // Light gray background
        surface: '#FFFFFF',    // White surface
        text: {
          primary: '#1E293B',   // Slate 800
          secondary: '#64748B',  // Slate 500
          tertiary: '#94A3B8'   // Slate 400
        }
      }
    },
  },
  plugins: [],
} 