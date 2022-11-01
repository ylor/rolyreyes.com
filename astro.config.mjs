import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [prefetch(), tailwind()],
  output: "server",
  site: "https://rolyreyes.com/",
});
