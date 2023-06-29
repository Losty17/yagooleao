/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "sticky",
    "top-0",
    {
      pattern: /gap-[0-9]*/,
    },
    {
      pattern: /text-(base|xs|sm|md|lg|xl|2xl|3xl|4xl)/,
    },
  ],
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
