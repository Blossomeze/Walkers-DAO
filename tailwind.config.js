/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#FC7800',
      black: '#060809',
      white: '#FFFFFF',
      gray: '#F9F9F9'
    },
    extend: {},
  },
  plugins: [],
}