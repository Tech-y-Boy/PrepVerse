/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          500: '#7C5CFC',
          600: '#6D4DE0',
          700: '#5B3FC4',
        },
        surface: {
          light: '#FFFFFF',
          lightAlt: '#FAFAFB',
          dark: '#0B0B0F',
          darkAlt: '#131318',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}