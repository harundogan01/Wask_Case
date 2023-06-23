/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "light-gray": "#D0D5DD",
        "light-gray-2": "#F9FAFB"
      }
    },
  },
  plugins: [],
}

