/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          'grayishWhite': '#EBE9F1',
          'white': '#fff',
          'gray':'#B9B9C3' ,
          'tableHeadColor':'#F3F2F7',
          'lightGreen': 'hsl(147, 89%, 82%)',
          'darkGreen':'#0da931',
          'red':'#FF3500'
        }
        
      }
    },
  },
  plugins: [],
}

