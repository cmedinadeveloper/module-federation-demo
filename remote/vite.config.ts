import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { withZephyr } from "vite-plugin-zephyr";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
    withZephyr(),
  ],
  server: {
    port: 5001,
    strictPort: true, // Ensure port 5001 is used
    cors: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext", // Needed for module federation
    minify: false, // Easier debugging
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "esm", // ES Modules
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
