import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // three.js lives in the lazily loaded HeroScene chunk (~235 kB gzip), which is expected
    chunkSizeWarningLimit: 1000,
  },
})
