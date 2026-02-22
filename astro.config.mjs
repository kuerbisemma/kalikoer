import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kalikoer.com',
  output: 'static',
  build: {
    format: 'file'
  }
});
