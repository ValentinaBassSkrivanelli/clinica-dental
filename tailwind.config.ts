import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Porcelana: fondo general, blanco frío
        porcelana: "#F6F7F5",
        // Grafito: texto principal
        grafito: "#1B2430",
        // Encía: rosa profundo, acento para botones y avisos
        encia: "#B04A5E",
        "encia-oscura": "#983F51",
        // Acero: azul grisáceo del instrumental, texto secundario y barra de la guía
        acero: "#52667A",
        // Línea: separadores finos
        linea: "#D8DDDA",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
