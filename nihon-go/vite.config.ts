import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/nihon-go/", // 👈 required for GitHub Pages under project repo
  plugins: [react()],
});
