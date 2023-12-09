import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker'
import { angular } from '@nitedani/vite-plugin-angular/plugin';

export default defineConfig({
  plugins: [
    angular(),
    checker({ typescript: true /** or an object config */ })
  ],
});
