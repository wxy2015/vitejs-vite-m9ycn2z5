import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 打印路径验证（调试用）
console.log('当前目录:', __dirname)
console.log('src路径:', path.resolve(__dirname, 'src'))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 必须指向项目根目录下的 src
      '@components': path.resolve(__dirname, 'src/components') // 可选额外别名
    }
  }
})
