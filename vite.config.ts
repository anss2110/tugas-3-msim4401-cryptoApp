/// <reference types="vitest" />

import { default as tailwind } from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy(), tailwind()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ⬅️ no './' before 'src'
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
