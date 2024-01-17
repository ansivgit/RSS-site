/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Styles: path.resolve(__dirname, 'src/app/styles')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['setup-tests.ts']
  }
});
