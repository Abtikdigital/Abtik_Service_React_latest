import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Prerender = require('vite-plugin-prerender');

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(), 
    react(),
    command === 'build' && Prerender({
      // Required - The path to the vite-outputted static site to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [
        '/', 
        '/startup-india-seed-fund/', 
        '/registration/', 
        '/startup-india-registration/', 
        '/startup-india-certification/', 
        '/fssai-registration/', 
        '/government-grants-funding/', 
        '/privacy-policy'
      ],
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
      },
    } as any),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
