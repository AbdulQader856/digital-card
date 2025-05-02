/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
      container: {
        center: true,
      },
      extend: {
        colors: {
          primary: "#f60", // Primary Color
          secondary: "#3D1A5C", // Secondary Color
          darkLvl1: "#121212", // For Dark Mode Body Background
          darkLvl2: "#282828", // For Dark Mode Cards Background
          darkLvl3: "#3f3f3f", // For chips buttons, dropdowns background color
          darkLvl4: "#575757", // For sidebars, navbar background color
          darkLvl5: "#717171",
          darkLvl6: "#8b8b8b",
          darkLvl7: "#D0D0D0",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        fontFamily: {
          primary: "var(--primary-font)",
        },
        screens: {
          sm: "480px",
          lm: "575px",
          md: "780px",
          lg: "992px",
          xl: "1200px",
          "xxl": "1360px",
        },
        animation: {
          "fade-in-down": "fadeInDown 3s linear normal",
          fadeInUp: "fadeInUp 0.5s linear normal",
          move: "move 3s linear 1s infinite",
          move2: "move 3s linear 2s infinite",
          move3: "move 3s linear 3s infinite",
          scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        },
        keyframes: {
          fadeInUp: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          scroll: {
            to: {
              transform: 'translate(calc(-50% - 0.5rem))',
            },
          },
          move: {
            "0%": { opacity: 0 },
            "25%": { opacity: 0 },
            "33%": { opacity: 1, transform: "translateY(30px)" },
            "67%": { opacity: 1, transform: "translateY(40px)" },
            "100%": { opacity: 0, transform: "translateY(55px)" },
          },
        },
        backgroundImage: {
          "polka-dots-light": "radial-gradient(#424242 0.5px, #F8FAFC 0.5px)",
          "polka-dots-dark": "radial-gradient(#F8FAFC 0.5px, #121212 0.5px)",
        },
        backgroundSize: {
          "polka-size": "10px 10px",
        },
      },
    },
    plugins: [
      require('@tailwindcss/container-queries')
    ],
  };
  