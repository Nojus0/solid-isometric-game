import { defineConfig, splitVendorChunkPlugin } from "vite"
import solidPlugin from "vite-plugin-solid"
import tsconfigPaths from "vite-tsconfig-paths"
export default defineConfig({
  plugins: [splitVendorChunkPlugin(), tsconfigPaths(), solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
})
