import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite"
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // const { command } = config;
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router']
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteMockServe({
        // 只在开发阶段开启 mock 服务
        mockPath: "./src/mock",
        // localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    optimizeDeps: {
      exclude: ['tinymce/plugins/contextmenu', 'tinymce/plugins/colorpicker'],
    },
    // server: {
    //   port: 9999,
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:8888',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
  }
});
