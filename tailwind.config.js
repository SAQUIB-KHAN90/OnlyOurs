/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF7F5",
        primary: "#E11D48",
        secondary: "#F8B4C4",
        textPrimary: "#f3495aff",
        textMuted: "#EA3C53",
        borderColor: "#C44240",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
