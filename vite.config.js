import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts(), vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'launchdarkly-vue-client-sdk',
      fileName: (format) => `launchdarkly-vue-client-sdk.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
