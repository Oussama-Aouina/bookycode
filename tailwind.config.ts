import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        icon: "0 3px 2px  rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      boxShadow: {
        pop: "1px 2px 3px 1px rgba(0, 0, 0, 0.15)",
      },
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
