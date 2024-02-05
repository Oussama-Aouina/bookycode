import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linearred: "#C64F49",
      },
      backgroundColor: {
        primary: "#EAE7E7",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
