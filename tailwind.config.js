// /** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center:true,
      
    },
    colors:{
      alpha:' #ea0000',
      bravo:'#009A4b',
      charlie:'#D1D9CC',
      delta:'#358C8C',
      echo:'#326A8C',
      fire:'#BFBFBF',
      gamma:'#d1d9cc8f',
      white:'#ffffff'

    }
  },
  plugins: [],
}
/* 
  #F25050
  #F26A4B
  #D1D9CC
  #358C8C
  #326A8C
*/