import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import icon from "astro-icon";

const localbuild_URL = "http://localhost:4321"
const live_URL =  'https://astridzhao.github.io'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  site: live_URL,
});
