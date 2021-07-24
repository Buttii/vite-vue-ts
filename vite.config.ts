import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import styleImport from "vite-plugin-style-import"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: "127.0.0.1",
    port: 8000
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, "/src/")
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name: string) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name: string) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })
  ]
})
