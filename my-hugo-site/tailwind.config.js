/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./hugo_stats.json",
    "./layouts/**/*.html",
    "./content/**/*.md",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
