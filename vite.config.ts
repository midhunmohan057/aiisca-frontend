import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    vike({ prerender: true }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/Components',
      '@utilities': '/src/utilities',
      '@assets': '/src/assets',
      '@pages': '/src/Pages'
    }
  }
})