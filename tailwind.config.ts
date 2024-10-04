import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        customWhite: '#ffffff', // Custom white color
        customBlack: '#171717', // Custom black color
        customDark: '#0a0a0a',  // Custom dark background
        customLight: '#ededed',  // Custom light foreground
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
