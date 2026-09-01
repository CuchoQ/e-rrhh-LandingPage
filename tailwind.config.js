
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#102a47",
          2: "#183a59",
        },
        blue: "#1599c4",
        cyan: "#55d4e6",
        text: "#18324b",
        muted: "#657b8e",
        page: "#f7fcfe",
        line: "rgba(16, 42, 71, .11)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
