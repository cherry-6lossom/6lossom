import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import macro from 'vite-plugin-babel-macros';

export default defineConfig({
  plugins: [macro(), react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: 'public',
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`,
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
