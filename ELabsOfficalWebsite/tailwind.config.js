/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgColor":"#0B1215",
        "textColor1":"#F7941D",
        "textColor2":"#F1FAEE",
        "darkBG":"radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0.1%, rgba(233, 226, 226, 0.28) 90.1%);"
      }
    },
  },
  plugins: [],
}

