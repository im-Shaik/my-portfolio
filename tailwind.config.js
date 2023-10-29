/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
    fontFamily: {
      signature: ["Noto Nastaliq Urdu"],
    },
  },
  daisyui: {
    themes: ["cyberpunk"],
  },
  plugins: [require("daisyui")],
};
