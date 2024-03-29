import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import vueJsx from "@vitejs/plugin-vue-jsx"
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
        host: "127.0.0.1",
        port: 8000,
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ]
})
