import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      modules: false,
      minimize: true,
      use: ['sass'],
    }),
    copy({
      targets: [
        {
          src: "src/styles/variables.scss",
          dest: "build",
          rename: "variables.scss"
        },
        {
          src: "src/styles/mixins.scss",
          dest: "build",
          rename: "mixins.scss"
        },
        {
          src: "src/styles/typography.scss",
          dest: "build",
          rename: "typography.scss"
        },
        {
          src: "src/styles/fonts",
          dest: "build",
          rename: "fonts"
        },
        {
          src: "../node_modules/slick-slider/slick/fonts",
          dest: "build",
          rename: "fonts"
        }
      ]
    })
  ]
};


// {
//   include: 'node_modules/**',
//     namedExports: {
//     'node_modules/keen-slider/react.js': ['useKeenSlider']
//   }
// }