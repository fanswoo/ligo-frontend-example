import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import inject from "@rollup/plugin-inject";

export default defineConfig({
  build: {
    manifest: "manifest.json",
  },
  server: {
    port: 3000,
    host: 'workspace',
  },
  preview: {
    port: 3001,
    host: 'workspace',
  },
  plugins: [
    vue(),
    inject({   // => that should be first under plugins array
      $: 'jquery',
      jQuery: 'jquery',
     'window.jQuery': 'jquery',
    }),
  ],
})
