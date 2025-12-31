import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // Плагины для React и TailwindCSS
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Алиас @ → src, уже был
      '@': path.resolve(__dirname, './src'),
      // Новый алиас src → src, чтобы прямой импорт 'src/...' работал
      'src': path.resolve(__dirname, './src'),
    },
  },
})
