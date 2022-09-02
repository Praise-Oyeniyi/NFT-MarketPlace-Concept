/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      "white": '#fff',
      "lwhite": 'rgba(255,255,255,40%)',
      "transparent":'rgba(255, 255, 255, 0)',
      "dark-bg": '#050505',
      "button": '#1A209E',
      "linear-left":'#69EACB',
      "linear-mid":'#EACCF8',
      "linear-right":'#6654F1',
      "ape-desc":'#0007483D',
      "price":'#24FF00',
      "price-down":'#FF0000',
    },
  },
  plugins: [],
}