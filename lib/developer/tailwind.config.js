/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/**/*.{jsx,js}", "./pages/**/*.{jsx,js}" ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
}
