import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), eslint(), svgr({ svgrOptions: { icon: true } })],
    server: {
      open: true,
      port: 3000,
    },
    define: {
      "process.env": {},
    },
  };
});
