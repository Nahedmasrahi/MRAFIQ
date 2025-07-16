/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // هنا ممكن تضيفي ألوان أو خطوط مخصصة لاحقًا
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
