

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      dancing:
        ['Dancing Script'],
      Rubik:
        ['Rubik Doodle Shadow']
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}