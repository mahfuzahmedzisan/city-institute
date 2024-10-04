/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      screens: {
        esm: "480px",
        md2: "992px",
      },

      animation: {
        rightShow: 'rightShow .4s linear forwards',
      },

      keyframes: {
        rightShow: {
          '0%': {
            transform: 'translate(100%)',
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
        }
      },

    },
  },
  plugins: [],
}