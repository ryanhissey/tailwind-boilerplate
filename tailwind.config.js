module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './public/**/*.php'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    fill: ['hover', 'focus'],
  },
  plugins: [],
}
