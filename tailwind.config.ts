import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-black": "#0b0b0d",
        "brand-deep": "#0f1114",
        "accent-yellow": "#FFD24D",
        "accent-blue": "#0AA5FF",
        "card-bg": "rgba(255, 255, 255, 0.04)",
        "text-primary": "#E6E7E8",
        "text-muted": "#9AA0A6",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "highlight-gradient":
          "linear-gradient(135deg, #0AA5FF 0%, #FFD24D 100%)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        h1: [
          "clamp(48px, 8vw, 64px)",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        h2: [
          "clamp(28px, 5vw, 36px)",
          {
            lineHeight: "1.3",
            fontWeight: "700",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "1.6",
          },
        ],
      },
      borderRadius: {
        card: "1rem",
        button: "9999px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0, 0, 0, 0.12)",
        glow: "0 0 30px rgba(10, 165, 255, 0.2)",
        "glow-yellow": "0 0 30px rgba(255, 210, 77, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        gradient: "gradient 3s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      transitionDuration: {
        "300": "300ms",
        "500": "500ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
