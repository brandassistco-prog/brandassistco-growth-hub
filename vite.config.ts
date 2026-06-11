import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/brandassistco-growth-hub/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
