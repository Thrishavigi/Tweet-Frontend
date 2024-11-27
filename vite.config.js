import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // Enable build cache to speed up rebuilds
    cache: {
      type: "filesystem",
    },
    commonjsOptions: {
      ignoreDynamicRequires: true,
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://tweet-backend-14hq.onrender.com",
        changeOrigin: true,
        secure: false, // Add this if you encounter SSL issues
      },
    },
  },
});
