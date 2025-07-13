import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  // The base URL of your site (currently points to a Netlify demo)
  site: "https://unides.agency",
  
  // Active integrations
  integrations: [
    tailwind({
      // Apply Tailwind base styles
      applyBaseStyles: true,
    }),
    icon()      // Enables icon components
  ],
  
  // Vite configuration for PostCSS
  vite: {
    css: {
      postcss: './postcss.config.js'
    }
  }
});
