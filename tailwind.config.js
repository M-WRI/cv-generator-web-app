/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          500: "#000000",
          400: "#4C4C4C",
        },
        primary: {
          500: "#1800E9",
          100: "#5f91f5",
        },
        error: {
          500: "#F44336",
          100: "#f08078",
        },
      },
      fontSize: {
        xs: "12px",
        sm: "16px",
        base: "18px",
        l: "24px",
        xl: "36px",
        "2xl": "48px",
        "3xl": "60px",
      },
      fontFamily: {
        primary: ['"Space Mono"', "monospace"],
        secondary: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
