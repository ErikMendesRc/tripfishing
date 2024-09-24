// tailwind.config.ts
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
        primary: "#03314b", // Cor principal
        secondary: "#02a4d3", // Cor secundária para destaques
        background: "var(--background)", // Variáveis CSS para cores de fundo
        foreground: "var(--foreground)", // Variáveis CSS para cores de primeiro plano
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Fonte sans-serif personalizada
      },
      boxShadow: {
        header: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra sutil para o header
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};

export default config;