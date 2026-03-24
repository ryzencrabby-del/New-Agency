import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const root = path.resolve(import.meta.dirname);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@/lib/utils": path.resolve(root, "utils.ts"),
      "@/components/ui": root,
      "@/components": root,
      "@/pages": root,
      "@/contexts": root,
      "@/hooks": root,
      "@/lib": root,
      "@": root,
      "@shared": path.resolve(root, "shared"),
      "@assets": path.resolve(root, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(root, "dist"),
    emptyOutDir: true,
  },
});
