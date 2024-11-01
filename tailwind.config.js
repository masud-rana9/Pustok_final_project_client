/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#3490dc",
        customSecondary: "#ffed4a",
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: false,
  },
};
