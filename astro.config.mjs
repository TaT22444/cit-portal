// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, // ローカルで API を有効にする
  },
});
