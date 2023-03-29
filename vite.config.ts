import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/dev": {
        target: "https://cms.strpart.com/api/v1",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/dev/, ""),
      },
    },
  },
});
