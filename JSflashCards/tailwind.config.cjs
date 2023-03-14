/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#134e4a',
        'secondary': '#134e4a',
        
        'gradient': 'linear-gradient(#434343, #282828)',
      },
      backgroundImage: {
        'content': 'linear-gradient(0deg, transparent 24%, rgba(69, 58, 255, 0.08) 25%, rgba(69, 58, 255, 0.08) 26%, transparent 27%, transparent 74%, rgba(69, 58, 255, 0.08) 75%, rgba(69, 58, 255, 0.08) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(69, 58, 255, 0.08) 25%, rgba(69, 58, 255, 0.08) 26%, transparent 27%, transparent 74%, rgba(69, 58, 255, 0.08) 75%, rgba(69, 58, 255, 0.08) 76%, transparent 77%, transparent)',
      },
      backgroundSize: {
        'content': '50px 50px',
      },
      'cardFlip': {
        '1': {
          transform: 'rotateY(0deg)',
          "backface-visibility": "hidden",
          "z-index": "1",
          "box-shadow": "0 0 0 0 rgba(0, 0, 0, 0.5)",
          "#134e4a": "0 0 0 0 rgba(0, 0, 0, 0.5)",
          "0 0 0 0 rgba(0, 0, 0, 0.5)": "0 0 0 0 rgba(0, 0, 0, 0.5)",
        },
      },
    },


},
  plugins: [],
}
