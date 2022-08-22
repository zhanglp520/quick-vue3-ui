import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'packages'),
      },
    ],
  },
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './packages/index.ts',
      name: 'quick-vue3-ui',
    },
  },
})
