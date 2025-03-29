/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ["'Press Start 2P'", "cursive"],
      },
      colors: {
        retroBlue: "#00A3E0", // puedes cambiar este a un azul más GameCube si lo deseas
        retroPurple: "#6A0DAD", // clásico GameCube
        retroYellow: "#FFD700",
        gamecubeGray: "#1c1c2c", // fondo oscuro con tono púrpura
      },
    },
  },
  plugins: [],
};
