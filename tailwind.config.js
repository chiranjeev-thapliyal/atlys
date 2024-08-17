/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#6B6C70",
          normal: "#C5C7CA",
          heavy: "#7F8084",
        },
        blue: {
          normal: "#4A96FF",
        },
        black: {
          DEFAULT: "#000000",
          light: "#27292D",
          normal: "#35373B",
          heavy: "#191920",
        },
        gradient: {
          start: "#969696",
          stop: "#343434",
        },
      },
      maxWidth: {
        116: "464px",
        145: "580px",
        175: "700px",
      },
    },
  },
  plugins: [],
};
