import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { withZephyr } from "vite-plugin-zephyr";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        remote_app:
          "https://carlos-medina-75-remote-module-federation-demo-cm-822122cfc-ze.zephyrcloud.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    withZephyr(),
  ],
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
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
