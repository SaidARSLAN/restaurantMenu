/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark : "#618264",
        gray: "#79AC78",
        lemon : "#B0D9B1",
        white : "#D0E7D2" 
      },
      fontFamily : {
        mulish : ['Mulish', 'sans-serif'],
        poppins : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}