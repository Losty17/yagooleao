/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: ["sticky", "top-0"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#1e1e1e",
        marble: "#eeeeee",
      },
    },
    plugins: [],
  },
};
