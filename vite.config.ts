import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
  plugins: [tsconfigPaths(), solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
