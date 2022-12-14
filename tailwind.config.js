/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        White2: "hsla(0, 0%, 100%,0.8)",

        DarkGray: "hsl(0, 0%, 55%)",
        Black: "hsl(0, 0%, 0%)",

        VeryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        Atala: ["Alata"],
        josephine: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
