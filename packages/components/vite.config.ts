import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: './index.ts',
      name: '@ainiteam/quick-vue3-ui',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    vueSetupExtend(),
    dts(),
    // dts({
    //   tsConfigFilePath: "../../tsconfig.json",
    // }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '#',
        replacement: resolve(__dirname, 'types'),
      },
    ],
  },
})
