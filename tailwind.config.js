// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF3988",
        foreground: "#E6EEF9",
        background: {
          DEFAULT: "#000000",
          secondary: "#3E003B",
        },
        sidebar: "#130016",
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-sidebar":
          "linear-gradient(90deg, #130016 0%, rgba(19, 0, 22, 0) 164.91%)",
        "gradient-main": "linear-gradient(252.44deg, #000000 0%, #3E003B 100%)",
      },
      fontSize: {
        h5: [
          "20px",
          {
            lineHeight: "26.8px",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
