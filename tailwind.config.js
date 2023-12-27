/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#111113',
        "zero-gray": '#DCDCDC',
        "zero-gray-light": '#E6E6E6',
        accent: '#ED953E',
        gray: '#919191',
        "granite-color": '#444343',
        infoColor: 'rgb(0,0,0)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        poppins: ['Poppins'],
      },
      fontSize: {
        h1: ['58px'],
        h2: ['40px'],
        h3: ['24px'],
        h4: ['20px'],
        h5: ['16px'],
        body: ['14px'],
        menu: ['18px']
      },
      brightness: {
        25: '.25',
        15: '.15',
      },
      screens: {
        'xs': '375px',
        '4k': '2560px',
      }
    },
  },
  plugins: ['~plugins/vue-gallery.client.js']
}
