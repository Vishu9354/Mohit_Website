/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17202b",
        panel: "#ffffff",
        line: "rgba(23,32,43,0.12)",
        gold: "#b97135",
        cyan: "#1d7fb7",
        coral: "#7562a8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(23, 32, 43, 0.12)",
        glow: "0 14px 42px rgba(29, 127, 183, 0.18)"
      },
      backgroundImage: {
        "radial-noise": "radial-gradient(circle at 20% 20%, rgba(29,127,183,0.10), transparent 30%), radial-gradient(circle at 76% 16%, rgba(185,113,53,0.10), transparent 30%), radial-gradient(circle at 50% 95%, rgba(117,98,168,0.08), transparent 28%)"
      }
    }
  },
  plugins: []
};
