/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 5s linear infinite",
        spins: "spin 50s linear infinite",
        pulse: "pulse 1s linear infinite",
      },
    },
  },
  plugins: [],
};
