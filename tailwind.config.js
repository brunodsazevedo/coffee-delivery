/** @type {import('tailwindcss').Config} */

const colors = require("./src/theme/colors");
const fontFamily = require("./src/theme/fontFamily");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
