import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT,
  },
  plugins: [vue()],
})
