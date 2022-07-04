module.exports = {
  purge: ["./dist/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", position: "absolute" },
          "100%": { transform: "translateY(0%)", position: "fixed" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", position: "fixed" },
          "100%": { transform: "translateY(-100%)", position: "absolute" },
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
