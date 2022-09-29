/* eslint-disable import/no-extraneous-dependencies */
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import { externalizeDeps } from 'vite-plugin-externalize-deps';

export default defineConfig({
  plugins: [
    vue(),
    externalizeDeps(),
  ],
  build: {
    lib: {
      entry: 'lib/index.js',
      name: 'infineon-icons-vue',
      // the proper extensions will be added
      fileName: 'infineon-icons-vue',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@infineon/infineon-icons'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
