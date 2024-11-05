/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#000000',
        secondary: '#14213d',
        accent: '#fca311',
        background: '#e5e5e5',
        text: '#ffffff'

      }
    },
  },
  plugins: [],
}

