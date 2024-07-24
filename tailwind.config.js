/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": { transform: "translateZ(-200px)", opacity: "0" },
          "100%": { transform: "translateZ(0)", opacity: "1" },
        },
      },
      animation: {
        zoomIn: "zoomIn 750ms ease-out forwards",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@xpd/tailwind-3dtransforms"),
  ],
};
