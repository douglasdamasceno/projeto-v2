/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-px-500': '#FF7E2E',

        'blue-px-800':'#1F4883',
        'blue-px-400':'#5AA2D8',
        'blue-px-100':'#BEDDF1',
        
        'green-px-700':'#00AD17',
        'green-px-500':'#41D958',
        
        'grey-px-900':'#212121',
        'grey-px-800':'#424242',
        'grey-px-700':'#616161',
        'grey-px-600':'#757575',
        'grey-px-400':'#BDBDBD',
        'grey-px-300':'#CCCCCC',
        'grey-px-100':'#FAFAFA',
        'grey-px-50':'#FFFFFF'
        ,
        'outline-px':'#CBCBCB',
      },
    },
  },
  plugins: [],
}
