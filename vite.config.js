import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/components/Shimmer.jsx",
      name: "Shimmer",
      fileName: "shimmer",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react"]
    }
  }
});
