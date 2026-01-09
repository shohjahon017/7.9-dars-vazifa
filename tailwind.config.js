/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        extend: {
          animation: {
            float: "float 6s ease-in-out infinite",
            fadeUp: "fadeUp 1s ease forwards",
            glow: "glow 3s ease-in-out infinite",
          },
          keyframes: {
            float: {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
            },
            fadeUp: {
              "0%": { opacity: 0, transform: "translateY(40px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
            glow: {
              "0%,100%": { opacity: 0.6 },
              "50%": { opacity: 1 },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
