import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.VITE_BASE_PATH || "/Redux-Shop",
  server: {
    host:"0.0.0.0",
    port: 3000,
  }, 
  preview: {
    host:"0.0.0.0",
    port:3001,
  },
})
