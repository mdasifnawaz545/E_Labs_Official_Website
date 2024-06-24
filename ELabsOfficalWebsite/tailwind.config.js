/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgColor":"#0B1215",
        "textColor1":"#F7941D"
      }
    },
  },
  plugins: [],
}

