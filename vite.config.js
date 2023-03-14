import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import macro from 'vite-plugin-babel-macros';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [macro(), react(), basicSsl()],
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
});
