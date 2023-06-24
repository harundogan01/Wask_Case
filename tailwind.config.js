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
    screens: {
      'sm-phone': '0',
      'phone': '300px',
      'sm-tablet': '500px',
      'tablet': '630px',
      'xl-tablet': '713px',
      'sm-laptop': '950px',
      'md-laptop': '1024px',
      'lg-laptop': '1280px',
      'xl-laptop': '1325px',
      '2xl-laptop': '1600px',
      '3xl-laptop': '1900px'
    }
  },
  plugins: [],
}

