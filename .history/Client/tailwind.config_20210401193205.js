module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: ["hover", "focus"],
      borderOpacity: ["active"],
      borderRadius: ["hover", "focus"],
      outline: ["hover", "active"],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
