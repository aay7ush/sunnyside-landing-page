/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "cyan-600": "hsl(167, 40%, 24%)",
        "cyan-400": "hsl(168, 34%, 41%)",
        "cyan-200": "hsl(167,44%,70%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "desaturated-blue": "hsl(212, 27%, 19%)",
        "grayish-blue-800": "hsl(213, 9%, 39%)",
        "grayish-blue-600": "hsl(232, 10%, 55%)",
        "grayish-blue-400": "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}
