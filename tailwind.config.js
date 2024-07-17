/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pastor-pointing":
          "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url('/images/pastor-pointing.png')",
      },

      keyframes: {
        slide_right_to_left: {
          from: {
            left: "100%",
          },
          to: {
            left: "0",
          },
        },
        slide_left_to_right: {
          from: {
            left: "0",
          },
          to: {
            left: "100%",
          },
        },
      },

      animation: {
        slide_right_to_left: "slide_right_to_left 1s ease-in-out",
        slide_left_to_right: "slide_left_to_right 1s ease-in-out",
      },

      textColor: {
        "white-smoke": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
