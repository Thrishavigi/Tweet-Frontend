import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
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

