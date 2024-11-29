/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pp : ['Poppins'],
      },
      backgroundImage:{
        bb: "url('/src/assets/banner.png')"
      },
      colors:{
        overlay : 'rgba(58, 58, 58, 0.7)',
        ex : 'rgba(255, 255, 255, 0.7)'
      }
    },
  },
  plugins: [],
}

