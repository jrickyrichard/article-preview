/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        desaturtedDarkBlue: 'hsl(214, 17%, 51%)',
        grayishBlue: 'hsl(212, 23%, 69%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)'
      },
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif']
      },
      screens: {
        'sm': '375px',
        'md': '750px',
        'lg': '950px'
      }
    },
  },
  plugins: [],
}