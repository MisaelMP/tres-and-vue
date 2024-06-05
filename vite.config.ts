import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssNested from 'postcss-nested'
import { templateCompilerOptions } from '@tresjs/core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    ...templateCompilerOptions
  })],
  css: {
    postcss: {
      plugins: [postCssNested]
    },
  },
})