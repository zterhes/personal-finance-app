/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        default: "#F8F4F0",
      },
      colors: {
        beige: {
          100: "#F8F4F0",
          500: "#98908B",
        },
        grey: {
          300: "#B3B3B3",
          500: "#696868",
          900: "#201F24",
        },
        green: "#277C78",
      },
      fontSize: {
        "text-preset-1": "32px",
        "text-preset-2": "20px",
        "text-preset-3": "16px",
        "text-preset-4": "14px",
        "text-preset-5": "12px",
      },
      lineHeight: {
        "text-preset-1": "120%",
        "text-preset-2": "120%",
        "text-preset-3": "150%",
        "text-preset-4": "150%",
        "text-preset-5": "150%",
      },
      spacing: {
        50: "4px",
        100: "8px",
        150: "12px",
        200: "16px",
        250: "20px",
        300: "24px",
        350: "28px",
        400: "32px",
        450: "36px",
        500: "40px",
      },
    },
  },
  plugins: [],
};
