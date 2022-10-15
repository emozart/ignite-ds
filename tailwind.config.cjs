/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",

      black: "#000000",
      white: "#ffffff",

      gray: {
        100: "#e1e1e4",
        200: "#c4c4cc",
        400: "#7e7c8a",
        800: "#202024",
        900: "#121214",
      },

      cyan: {
        300: "#9BE1FB",
        500: "#81D8F7",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    plugins: [],
  },
};
