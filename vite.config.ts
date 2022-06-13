import path from "path"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import solidPlugin from "vite-plugin-solid"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [splitVendorChunkPlugin(), tsconfigPaths(), solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    rollupOptions: {
      output: {
        chunkFileNames(ch) {
          if (ch.name == "index" && ch.facadeModuleId) {
            const dirName = path.basename(path.join(ch.facadeModuleId, "../"))
            return `${dirName}.[hash].js`
          } else return `[name].[hash].js`
        },
        entryFileNames(chunkInfo) {
          if (chunkInfo.isEntry && chunkInfo.facadeModuleId) {
            return `entrypoint.[hash].js`
          }

          if (chunkInfo.name == "index" && chunkInfo.facadeModuleId) {
            const dirName = path.basename(
              path.join(chunkInfo.facadeModuleId, "../")
            )
            return `${dirName}.[hash].js`
          } else return `[name].[hash].js`
        },
      },
    },
  },
})
