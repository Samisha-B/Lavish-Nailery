import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: { DEFAULT: "#362b28", dark: "#261e1c", light: "#4a3c37" },
        gold: { DEFAULT: "#a58a52", light: "#d4bd8a" },
        cream: "#f7efe3",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
