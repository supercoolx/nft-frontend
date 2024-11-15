import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1024
  },
  plugins: [react(), svgr()],
  server: {
    host: true
  }
})
