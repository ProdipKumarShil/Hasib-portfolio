/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ibm': ['IBM Plex Mono', 'monospace'],
      'raleway': ['Raleway', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#080808',
        'secondary': '#3F8E00'
      }
    },
  },
  plugins: [require("daisyui")],
}