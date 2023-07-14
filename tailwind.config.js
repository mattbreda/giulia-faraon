/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./slices/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'simple': '0px 1px 5px 0px #0000004D',
        'simple-inner': '0px 2px 2px 0px #00000040 inset'
      },
      colors: {
        'purple': '#767BA9',
        'red': '#FE695F',
        'green': '#D3EDC6',
        'blue': '#E4E7FF',
        'yellow': '#FFF6A3',
      },
      fontFamily: {
        PPEditorial: ['PPEditorialNew', 'serif'],
        TWKLausanneULight: ['TWKLausanne-200', 'sans-serif'],
        TWKLausanneLight: ['TWKLausanne-400', 'sans-serif']
      },
    },
    fontSize: {
      name: ['3.5rem', '4.1875rem'],
      'titolo-grande': ['1.5rem', '1.8125rem'],
      'titolo-h1': ['1.25rem', '1.5rem'],
      'titolo-h2': ['1.0625rem', '1.25rem'],
      'titolo-h3': ['0.875rem', '1rem'],
      paragraph: ['0.75rem', '0.875rem'],
      note: ['0.625rem','0.75.rem']
    }
  },
  plugins: [],
}

