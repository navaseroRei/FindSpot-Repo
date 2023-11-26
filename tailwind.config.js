/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: { 
        'home-bg': "url('/assets/images/home-bg.png')",
      },
      colors: {
        'regal-blue': '#121F42',
      },
      fontFamily: {
        lexend:["Lexend', sans-serif"],
      },
    },
  },
  plugins: [],
};
