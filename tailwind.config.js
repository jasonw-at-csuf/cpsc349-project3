/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
  },
  safelist: [
    "m-2",
    "h-28",
    "w-28",
    "hover:outline-amber-900",
    "hover:outline-8",
  ],
  // plugins: [require("daisyui")],
};
