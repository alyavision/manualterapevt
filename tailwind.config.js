module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-colorsdark-blue": "var(--accent-colorsdark-blue)",
        "accent-colorslight-blue": "var(--accent-colorslight-blue)",
        "accentserror-red": "var(--accentserror-red)",
        black: "var(--black)",
        genericwhite: "var(--genericwhite)",
        "neutral-100": "var(--neutral-100)",
        "neutral-300": "var(--neutral-300)",
        "neutral-50": "var(--neutral-50)",
        "neutral-colors-100": "var(--neutral-colors-100)",
        "neutral-colors-800": "var(--neutral-colors-800)",
        "primary-colorssky-blue": "var(--primary-colorssky-blue)",
        "primary-colorssoft-blue": "var(--primary-colorssoft-blue)",
        "secondary-color": "var(--secondary-color)",
        "secondary-colors-color-2": "var(--secondary-colors-color-2)",
        "secondary-colorslight-sand": "var(--secondary-colorslight-sand)",
        "secondarysecondary-500": "var(--secondarysecondary-500)",
        "text-colorsdark-gray": "var(--text-colorsdark-gray)",
        "text-colorslight-gray": "var(--text-colorslight-gray)",
        "textgray-100": "var(--textgray-100)",
        "uigray-100": "var(--uigray-100)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
      },
      boxShadow: { "drop-shadow-medium": "var(--drop-shadow-medium)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
