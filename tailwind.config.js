/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      orange: "#FF3811",
      white: "#fff",
      footer: "#111827",
      gray: "#888C93",
      gray2: "#666",
      red: "#D04B4B",
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: false,
  // },
};
