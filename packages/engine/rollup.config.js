import babelPlugin from "@rollup/plugin-babel"
import typescript from "@rollup/plugin-typescript"

const extensions = [".js", ".jsx", ".ts", ".tsx"]

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "es",
    preserveModulesRoot: "./src/",
    preserveModules: true
  },
  external: ["solid-js", "solid-js/web"],
  plugins: [
    typescript(),
    babelPlugin({
      babelHelpers: "bundled",
      presets: [["solid", { generate: "dom" }]],
      extensions,
      exclude: "node_modules/**",
    }),
  ],
}

export default config
