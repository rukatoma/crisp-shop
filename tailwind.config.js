/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'service': ['Roboto'],
    },
    extend: {
      colors: {
        'devider': '#C4C4C4',
        'liteblack': '#3F3F3F',
      }
    },
  },
  plugins: [],
}
