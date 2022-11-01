import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [tailwind()],
  output: "server",
  site: "https://rolyreyes.com/",
});
