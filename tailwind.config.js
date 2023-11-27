/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    colors:{
      'red': '#fc2444',
      'black': '#19181A',
      'midblack': '#4e4e50',
      'white': '#ffffff',
      'gray': '#282828',
      'rating-green': '#5cb85c',
      'rating-orange': '#f0ad4e',
      'rating-red': '#d9534f',

    }
  },
  plugins: [],
}