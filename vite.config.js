import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  // Для правильних відносних шляхів у продакшн-режимі
  base: './', // Це забезпечить коректні шляхи до файлів
})
