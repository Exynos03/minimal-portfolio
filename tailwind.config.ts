/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        customBlack: '#0D1426',
        honey: {
          DEFAULT: "#fbbf24", // amber-400
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
        },
        pollen: "#fde047", // yellow-300
        hive: "#fffbeb", // amber-50
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "wobble": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        "drip": {
          "0%": { transform: "translate(-50%, -50%) scale(1, 1)", borderRadius: "50%" },
          "40%": { transform: "translate(-50%, -50%) scale(0.9, 1.1)", borderRadius: "50% 50% 45% 45%" }, // Roundish
          "60%": { transform: "translate(-50%, -40%) scale(0.8, 1.3)", borderRadius: "40% 40% 60% 60%" }, // Elongating down
          "80%": { transform: "translate(-50%, -30%) scale(0.7, 1.5)", borderRadius: "30% 30% 70% 70%" }, // Heavy drop
          "90%": { transform: "translate(-50%, -55%) scale(1.1, 0.9)", borderRadius: "60% 60% 40% 40%" }, // Snap back up
          "100%": { transform: "translate(-50%, -50%) scale(1, 1)", borderRadius: "50%" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wobble": "wobble 3s ease-in-out infinite",
        "drip": "drip 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}