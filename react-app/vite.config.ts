import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "/assets"),
    },
  },
})
