/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        fadeEffect : {
          '0%' : {opacity : '0.1'},
          '100%' : {opacity : '1'}
        }
      },
      animation : {
        'fadeEffect' : 'fadeEffect 1s ease'
      },
      brightness : {
        25 : '.25' 
      },
      fontFamily : {
        mulish : ['Mulish', 'sans-serif'],
        poppins : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}