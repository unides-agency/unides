const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        'playfair': ["Playfair Display SC", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Brand Colors
        'purple-base': '#a987ff',
        'purple-dark': '#7c61d8',
        'deep-teal': '#0a353a',
        'teal-lighter': '#134f55',
        'bright-lime': '#d9fd12',
        'lime-muted': '#c1e600',
        'orange-red': '#fd5d13',
        'orange-tint': '#ff8142',
        'soft-pink': '#ff8f9d',
        'pink-muted': '#fdb0bc',
        
        // CSS Variable Colors
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
