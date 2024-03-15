/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        knewave: ["Knewave", "system-ui"],
        "kite-one": ["Kite One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
