/** @type {import('tailwindcss').Config} */
const tail = {
  content: {
    // relative: true,
    // transform: (content) => content.replace(/taos:/g, ""),
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#99C24D",
        neutraDark: "#363A37",
        neutraLight: "#D9D9D9",
        secondary: "#6B8736",
        neutraexLight: "#D7DAD1",
      },
      fontFamily: {
        inriaSerif: "'Inria Serif', serif",
      },
      width: {
        18: "105.5%",
      },
      height: {
        119: "119%",
      },
    },
  },
  // safelist: [
  //   "!duration-[0ms]",
  //   "!delay-[0ms]",
  //   'html.js :where([class*="taos:"]:not(.taos-init))',
  // ],
};

export default tail;
