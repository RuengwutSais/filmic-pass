/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
});

