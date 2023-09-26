// vite.config.ts
import { defineConfig } from "file:///D:/python%20Web%E7%BC%96%E7%A8%8B%E5%82%A8%E5%AD%98/vue/%E5%B0%9A%E6%A1%82%E8%B0%B7%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/shangguigu/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/python%20Web%E7%BC%96%E7%A8%8B%E5%82%A8%E5%AD%98/vue/%E5%B0%9A%E6%A1%82%E8%B0%B7%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/shangguigu/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { viteMockServe } from "file:///D:/python%20Web%E7%BC%96%E7%A8%8B%E5%82%A8%E5%AD%98/vue/%E5%B0%9A%E6%A1%82%E8%B0%B7%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/shangguigu/node_modules/vite-plugin-mock/dist/index.js";
import { createSvgIconsPlugin } from "file:///D:/python%20Web%E7%BC%96%E7%A8%8B%E5%82%A8%E5%AD%98/vue/%E5%B0%9A%E6%A1%82%E8%B0%B7%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE/shangguigu/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var vite_config_default = defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        localEnabled: command === "serve"
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxweXRob24gV2ViXHU3RjE2XHU3QTBCXHU1MEE4XHU1QjU4XFxcXHZ1ZVxcXFxcdTVDMUFcdTY4NDJcdThDMzdcdTU0MEVcdTUzRjBcdTdCQTFcdTc0MDZcdTk4NzlcdTc2RUVcXFxcc2hhbmdndWlndVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHl0aG9uIFdlYlx1N0YxNlx1N0EwQlx1NTBBOFx1NUI1OFxcXFx2dWVcXFxcXHU1QzFBXHU2ODQyXHU4QzM3XHU1NDBFXHU1M0YwXHU3QkExXHU3NDA2XHU5ODc5XHU3NkVFXFxcXHNoYW5nZ3VpZ3VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3B5dGhvbiUyMFdlYiVFNyVCQyU5NiVFNyVBOCU4QiVFNSU4MiVBOCVFNSVBRCU5OC92dWUvJUU1JUIwJTlBJUU2JUExJTgyJUU4JUIwJUI3JUU1JTkwJThFJUU1JThGJUIwJUU3JUFFJUExJUU3JTkwJTg2JUU5JUExJUI5JUU3JTlCJUFFL3NoYW5nZ3VpZ3Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHt2aXRlTW9ja1NlcnZlfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuaW1wb3J0IHtjcmVhdGVTdmdJY29uc1BsdWdpbn0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe2NvbW1hbmR9KT0+e1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFt2dWUoKSxcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvaWNvbnMnKV0sXG4gICAgICAgIHN5bWJvbElkOidpY29uLVtkaXJdLVtuYW1lXScsXG4gICAgICB9KSxcbiAgICAgIHZpdGVNb2NrU2VydmUoe1xuICAgICAgICBsb2NhbEVuYWJsZWQ6Y29tbWFuZCA9PT0gJ3NlcnZlJyxcbiAgICAgIH0pXSxcbiAgICBcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjpwYXRoLnJlc29sdmUoXCIuL3NyY1wiKVxuICAgICAgfVxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTonQGltcG9ydCBcIi4vc3JjL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7J1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9hLFNBQVMsb0JBQW9CO0FBQ2pjLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsU0FBUSxxQkFBb0I7QUFDNUIsU0FBUSw0QkFBMkI7QUFFbkMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBQyxRQUFPLE1BQUk7QUFDdkMsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQUMsSUFBSTtBQUFBLE1BQ1oscUJBQXFCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBLFFBQzFELFVBQVM7QUFBQSxNQUNYLENBQUM7QUFBQSxNQUNELGNBQWM7QUFBQSxRQUNaLGNBQWEsWUFBWTtBQUFBLE1BQzNCLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFFSixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFJLEtBQUssUUFBUSxPQUFPO0FBQUEsTUFDMUI7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixtQkFBbUI7QUFBQSxVQUNuQixnQkFBZTtBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
