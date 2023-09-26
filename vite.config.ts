import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {viteMockServe} from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ command,mode }) => {
  const env = loadEnv(mode,process.cwd());
  return {
    plugins: [vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId:'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled:command === 'serve',
      })],
    
    resolve: {
      alias: {
        "@":path.resolve("./src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData:'@import "./src/styles/variable.scss";'
        },
      },
    },
    //代理
    server: {
      proxy: {
        
          [env.VITE_APP_BASE_API]: {
            target: env.VITE_SERVE,
            changeOrigin: true,
            rewrite:(path)=>path.replace(/^\/api/,''),
          }
         
      }
    }
  }
})
