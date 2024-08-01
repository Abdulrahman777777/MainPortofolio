/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      Projects: "4rem",
      Projects2: "4.3rem",
    },
    extend: {
      fontFamily: {
        inkfree: ["Ink Free", "sans-serif"],
        telescope: ["Annie Use Your Telescope", "cursive"],
        anton: ["Anton", "sans-serif"],
        Display: ["Major Mono Display", "monospac"],
      },
      colors: {
        blue: "#3B82F6",
        blueShade: "#1E293B",
        blueShades: "#0D2043",
        Dark: "#252525",
      },
      screens: {
        sm: { max: "956px" },
        other: { max: "1266px" },
        notime: { max: "1010px" },
      },
      fontSize: {
        Full: "30vw",
        footer: "3vw",
        Tenxl: "200px",
        Ninexl: "100px",
        Nine5: "150px",
      },
    },
    height: {
      fourScreen: "400vh",
      blow: "20rem",
      threeScreen: "300vh",
      40: "40%",
      60: "60%",
      Screen8: "200vh",
      screen: "100vh",
      half: "50%",
      full: "100%",
      seventy: "70%",
      thirty: "30%",
      sixty: "60%",
      10: "10%",
      100: "100px",
    },
    spacing: {
      0: "0%",
      10: "10%",
      45: "45%",
      20: "20%",
      30: "30%",
      90: "90%",
    },
    minWidth: {
      100: "100px",
      72: "24rem",
    },
    maxWidth: {
      100: "100px",
    },
    padding: {
      1: "10px",
      2: "20px",
      5: "50px",
      8: "80px",
    },
  },
  plugins: [],
};
