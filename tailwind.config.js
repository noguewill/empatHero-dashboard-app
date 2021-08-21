module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "10.5/12": "89%",
        "2.5/6": "27%",
      },
      height: {
        "1/7": "10%",
        "6/7": "90%",
        "7/8": "93%",
        766: "39rem",
        1080: "53.5rem",
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
        empatCalendarColor: "#E1F3ED59",
      },
      screens: {
        "2xl": "1600px",
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
