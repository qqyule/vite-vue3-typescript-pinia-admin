/*
 * @Author: qqyule@gmail.com
 * @Date: 2022-01-22 22:07:18
 * @LastEditTime: 2022-01-23 16:04:28
 * @Description: vite配置文件
 */
import { defineConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    base: '/',
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src',
        }
      ]
    },
    build: {
      // 生产环境打包配置
      terserOptions: {
        compress: {
          drop_console: true, // 删除console
        }
      },
      outDir: 'dist',
      assetsDir: 'assets'
    },
    server: {
      port: 8080,
      open: true,
      cors: true
    }
  }
})
