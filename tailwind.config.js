module.exports = {
  content: [`./app/**/*.{ts,tsx,jsx,js}`],
  theme: {
    extend: {
      backgroundImage: {
        "moon-gradient": `linear-gradient(90deg, rgba(0,0,0,1) 37%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 51%, rgba(0,0,0,1) 63%)`,
      },
      backgroundSize: {
        "auto": `auto`,
        "cover": `cover`,
        "contain": `contain`,
        "300%": `300%`,
      },
      keyframes: {
        fade: {
          "50%": { color: `rgb(0,0,0)` },
        },
        moon: {
          "0%": { backgroundPosition: `left` },
          "100%": { backgroundPosition: `right` },
        },
      },
      animation: {
        "spin-slow": `spin 15s linear infinite`,
        "bounce-slow": `bounce 1s ease-in-out infinite`,
        "pulse-slow": `pulse 15s`,
        "fade-slow": `fade 30s ease-in-out infinite`,
        "moon-slow": `moon 20s infinite`,
      },
    },
  },
  plugins: [],
}
