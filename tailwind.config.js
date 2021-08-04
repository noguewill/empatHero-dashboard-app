module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "1/7": "10%",
        "6/7": "90%",
        "7/8": "93%",
      },
      fontSize: {
        xxs: "11px",
      },
      colors: {
        empatBlue: "#7EBCF3",
        empatOrange: "#F08645",
        empatGreen: "#3FA482",
        empatBlack: "#2C2C2C",
        empatGray: "#959595",
        empatLightGray: "#F9F9F9",
        empatLightBlue: "#7EBCF3",
        empatLightGreen: "#9BD8C3",
        empatCalendarColor: "#F3F9F7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
