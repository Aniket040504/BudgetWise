import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/get': 'http://localhost:8000',
      '/add': 'http://localhost:8000',
      '/del': 'http://localhost:8000',
    }
  }
})
