/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        luzCircular:'repeating-radial-gradient(rgba(255,255,255,0.4) 3px,#000 5px,#252734 50px);'
      },
    },
  },
  plugins: [],
}

