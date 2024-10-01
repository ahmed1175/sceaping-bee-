import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_white: "#f2f2f2",
        bg_light_yellow: "#ffc91f",
        bg_light_blue: "#c5c5c4",
        bg_dark_yellow: "#e1ae01",
        bg_light_dark: "#111111e6",
        bg_black: "#0f0f0e",
        F_white: "#ffffff",
        F_light_yellow: "#ffc91f",
        F_light_blue: "#b3bac5",
        F_light_green: "#36b37e",
        F_light_gray: "#5a7184",
        F_dark_gray: "#24292eb3",
        F_light_black: "#0f0f0e",
        F_dark: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
