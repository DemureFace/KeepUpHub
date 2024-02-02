/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#C4F23E",
          200: "#FFE600",
        },
        dark: "#141414",
        gray: "#D9D9D9",
      },

      screens: {
        sm: "360px",
        md: "768px",
        lg: "960px",
        xl: "1248px",
        "2xl": "1632px",
      },

      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },

      fontSize: {
        "8xl": ["76px", "91px"],
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(157deg, #FFE600 25.84%, #C4F23E 65.32%)",
        "experience-card": "url('/images/choice/experience-bg.png')",
        "solutions-card": "url('/images/choice/solutions.png')",
        "customer-focus-card": "url('/images/choice/customer-focus.png')",
      },

      keyframes: {
        levitation: {
          "0%, 100%": { transform: "translateY(0) scale(1) skew(0deg, 0deg)" },
          "25%": {
            transform: "translateY(-10px) scale(1.05) skew(5deg, -5deg)",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.1) skew(-5deg, 5deg)",
          },
          "75%": {
            transform: "translateY(-10px) scale(1.05) skew(5deg, -5deg)",
          },
        },
      },

      animation: {
        levitation: "levitation 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
