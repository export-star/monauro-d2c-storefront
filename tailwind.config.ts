import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        monauro: {
          gray: "#D9D9D6",
          purple: "#B9A3E3",
          orange: "#FF8039",
          green: "#B9E972",
          teal: "#2CD5C4",
          ink: "#171717"
        }
      },
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"]
      },
      borderRadius: {
        monauro: "8px"
      }
    }
  },
  plugins: []
};

export default config;
