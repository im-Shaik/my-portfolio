/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
    fontFamily: {
      signature: ["Noto Nastaliq Urdu"],
    },
    colors: {
      white: "#ffffff",
      primary: "#ff7598",
      secondary: "#75d1f0",
    },
  },
  daisyui: {
    themes: ["cyberpunk"],
  },
  plugins: [require("daisyui")],
};
