module.exports = {
  content: [`./app/**/*.{ts,tsx,jsx,js}`],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "50%": { color: `rgb(0,0,0)` },
        },
      },
      animation: {
        "spin-slow": `spin 15s linear infinite`,
        "bounce-slow": `bounce 1s ease-in-out infinite`,
        "pulse-slow": `pulse 15s`,
        "fade-slow": `fade 30s ease-in-out infinite`,
      },
    },
  },
  plugins: [],
}
