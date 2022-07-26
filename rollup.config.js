import { defineConfig } from "rollup";
import url from "@rollup/plugin-url";

export default defineConfig({
  input: "src/index.js",
  output: {
    dir: "dist/",
    format: "esm",
  },
  plugins: [
    url({
      include: "**/*.pdf",
    }),
  ],
});
