/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: " #717171",
        darkGray: "#252525",
        white: "#FFFFFF",
        blue: "#0095F6",
        skyBlue: "#49B7F6",
        line: "#D9D9D9",
        orColor: "#B4B4B4",
        links: "#00376B",
        borderColor: "#DBDBDB",
        fbColor: "#3D5A98",
      },
    },
  },
  plugins: [],
};
