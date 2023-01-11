/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#56CB49',
        background: '#F5F5F5',
        title: '#4D5E80',
        linearFrom: '#56CB49',
        linearTo: '#FEE96C',
      },
      contain: {
        padding: {
          DEFAULT: '0rem'
        }
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
