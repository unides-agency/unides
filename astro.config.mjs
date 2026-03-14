import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import node from "@astrojs/node";
import { defineConfig } from "astro/config";

export default defineConfig({
  // The base URL of your site (currently points to a Netlify demo)
  site: "https://unides.agency",

  // Use hybrid mode: static by default, but admin routes are server-rendered
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),

  // Active integrations
  integrations: [
    tailwind({
      // Apply Tailwind base styles
      applyBaseStyles: true,
    }),
    react(),        // Enable React components
    icon()          // Enables icon components
  ],
  
  // Vite configuration for PostCSS and Rollup
  vite: {
    css: {
      postcss: './postcss.config.js'
    },
    build: {
      rollupOptions: {
        // Configure Rollup to handle conditional expressions more gracefully
        output: {
          // Prevent aggressive optimizations that cause the conditional expression issue
          compact: false,
          minifyInternalExports: false
        },
        // Disable tree-shaking for problematic conditional expressions
        treeshake: {
          propertyReadSideEffects: false,
          tryCatchDeoptimization: false
        }
      }
    }
  }
});
