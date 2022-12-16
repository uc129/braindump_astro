/* imports */
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://braindumpstudio.com/",
  integrations: [tailwind({
    config: {
      path: "./tailwind.config.js"
    }
  })],
  output: "server",
  adapter: vercel()
});