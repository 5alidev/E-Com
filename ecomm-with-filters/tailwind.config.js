/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlack: "#222831",
        lightBlack: "#31363F",
        myTeal: "#76ABAE",
        myTealLight: "#9ad1d4",
        mutedWhite: "#EEEEEE",
        lightWhite: "#c2bfbf",
      },
    },
  },
  plugins: [],
};
