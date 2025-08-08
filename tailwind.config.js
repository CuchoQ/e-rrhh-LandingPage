
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A4D6",
        dark: "#1C2942",
        lightgray: "#F5F5F5"
      }
    },
  },
  plugins: [],
}
