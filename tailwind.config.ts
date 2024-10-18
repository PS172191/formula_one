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
        primary: "#E10600",
        secondary: "#1F1F27",
      },
      spacing: {
        p5: "5px",
        p10: "10px",
        p30: "30px",
        p40: "40px",
        p50: "50px",
      },
      fontFamily: {
        bruno: ["var(--font-bruno)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
export default config;

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }

// 100 – Thin
// 200 – Extra Light (Ultra Light)
// 300 – Light
// 400 – Normal
// 500 – Medium
// 600 – Semi Bold (Demi Bold)
// 700 – Bold
// 800 – Extra Bold (Ultra Bold)
// 900 – Black (Heavy)
