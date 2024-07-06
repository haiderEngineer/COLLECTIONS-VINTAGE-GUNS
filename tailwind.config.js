/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "white-300": "#F2EBE2",
        "black-300": "#242D1C",
        "black-500": "#242d1c26",
        "green-600": "#149688",
        "green-700": "#0E8376",
        "green-800": "#0c6f64",
        "orange-400": "#E7600E",
        "orange-700": "#E6600D",
        "orange-800": "#E7600ED9",
        "orange-900": "#c6540f",
        "red-500": "#B01C1C",
        "red-600": "#8b3a08",
        "white-500": "rgba(242, 235, 226, 0.50)",
        "gray-400": "#D9D4CA",
        "gray-600": "#242d1c4d",
        "gray-800": "#BEBBB0",
        "gray-1000": " #242d1cb3",
        "gray-2000": "#dedfdd",
        "red-1000": "#B01C1C",
        "black-400": "#B5B3A7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        capitolium: ["capitolium-2", "serif"],
      },
      boxShadow: {
        "10xl": " 0px 4px 20px 0px rgba(0, 0, 0, 0.15)",
      },
      screens: {
        xs: "380px",
        // => @media (min-width: 320px) { ... }

        sxs: "420px",
        // => @media (min-width: 320px) { ... }

        sm: "576px",
        // => @media (min-width: 575px) { ... }
        ssm: "650px",
        md: "768px",
        // => @media (min-width: 768px) { ... }
        llg: "900px",
        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }

        "2xl": "1366px",
        // => @media (min-width: 1366px) { ... }

        "3xl": "1600px",
        // => @media (min-width: 1600px) { ... }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
