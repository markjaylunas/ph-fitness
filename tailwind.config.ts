import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          extend: "dark",
          colors: {
            background: "#110317",
            foreground: "#ffffff",
            primary: {
              50: "#c495d2",
              100: "#b880c8",
              200: "#ac6bbf",
              300: "#a055b6",
              400: "#9440ad",
              500: "#882ba4",
              600: "#7a2794",
              700: "#6d2283",
              800: "#5f1e73",
              900: "#521a62",
              DEFAULT: "#882ba4",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#8c80b0",
              100: "#7467a0",
              200: "#5d4d90",
              300: "#463481",
              400: "#2f1a71",
              500: "#180161",
              600: "#160157",
              700: "#13014e",
              800: "#110144",
              900: "#0e013a",
              DEFAULT: "#180161",
            },
            focus: "#DD62ED",
          },
          layout: {
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
