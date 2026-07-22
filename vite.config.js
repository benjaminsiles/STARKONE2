import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // This is a genuine multi-page app now (separate static HTML per route),
  // not an SPA — disable Vite's SPA history-fallback so dev/preview servers
  // 404 on unknown paths and resolve /about, /events, etc. to their own
  // static HTML the same way a static host (Cloudflare Pages) would.
  appType: 'mpa',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        events: resolve(__dirname, 'events/index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
});
