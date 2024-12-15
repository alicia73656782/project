/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode
        light: {
          bg: '#ffffff',
          'bg-secondary': '#f3f4f6',
          text: '#1f2937',
          'text-secondary': '#4b5563',
          accent: '#2563eb',
          border: '#e5e7eb'
        },
        // Dark mode with blue tint
        dark: {
          bg: '#1E272E',
          'bg-secondary': '#2C3E50',
          text: '#FFFFFF',
          'text-secondary': '#A7B5C1',
          accent: '#FFB74D',
          border: '#374151'
        }
      },
      boxShadow: {
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};