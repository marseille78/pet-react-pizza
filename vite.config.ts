import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pet-react-pizza",
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]--[hash:base64:2]",
    },
  },
});
