/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4FACF7',
        secondary: '#0af598',
        accent: '#20b270',
        dark: '#21744b',
        darker: '#183b28',
      }
    },
  },
  plugins: [],
}