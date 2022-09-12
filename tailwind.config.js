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
    screens: {
      'sm': {'max': '530px'},
      // => @media (max-width: 519px) { ... }

      'md': {'min':'531px', 'max':'750px'},
      // => @media (min-width: 531px) { ... }

      'small': {"max":'750px'},
      // => @media (min-width: 0px) { ... }

      'xl': '751px',
      // => @media (min-width: 752px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}