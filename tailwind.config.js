/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      height: {
        128: "40rem"
      }
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}


