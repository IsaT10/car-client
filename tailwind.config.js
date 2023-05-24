/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      orange: "#FF3811",
      white: "#fff",
      footer: "#151515",
      gray: "#888C93",
      gray2: "#666",
      darkGray: "#444444",
      lightGray: "#F3F3F3",
      red: "#D04B4B",
      yellow: "#FF912C",
      green: "#29B170",
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: false,
  // },
};
