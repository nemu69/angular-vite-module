/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker'
import { angular } from '@nitedani/vite-plugin-angular/plugin';

export default defineConfig({
  plugins: [
    angular(),
    checker({ typescript: true })
  ],
  test: {
    setupFiles: 'src/test-setup.ts',
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
