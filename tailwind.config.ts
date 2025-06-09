import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[class~="dark"]'],
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        background: "var(--ion-background-color)",
        text: "var(--ion-text-color)",
      },
    },
  },
  plugins: [],
};

export default config;
