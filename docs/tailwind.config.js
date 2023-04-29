/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  darkMode: ['class', '[data-theme="dark"]']
}