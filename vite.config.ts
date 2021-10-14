/*
 * @Date         : 2021-10-11 09:24:30
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 14:32:07
 * @FilePath     : \vite.config.ts
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const { resolve } = require("path");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);

  return {
    base: env.VITE_BASE,
    server: {
      host: "127.0.0.1",
      port: 8080,
      open: true,
      proxy: {
        api: env.VITE_API
      }
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      assetsInlineLimit: 4096,
      sourcemap: false,
      minify: "esbuild",
      brotliSize: true,
      chunkSizeWarningLimit: 500
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "src")
        }
      ]
    },
    plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  };
});
