/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/paper-texture.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
// transform style the card to flip when the user clicks the button
      transitionProperty: {
        "transform-style": "preserve-3d",
  
    },
  },

},
  plugins: [],
}
