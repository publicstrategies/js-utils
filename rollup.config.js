// @ts-check
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import glob from 'glob';

const INCLUDE = 'src/**/*.ts';
const EXCLUDE = 'src/**/*.spec.ts';

/** @type {import('rollup').RollupOptions} */
const config = {
  input: glob.sync(INCLUDE, { ignore: EXCLUDE }),
  plugins: [
    typescript({
      tsconfigOverride: {
        exclude: [EXCLUDE],
        include: [INCLUDE],
        compilerOptions: {
          declaration: true,
        },
      },
    }),
    terser(),
  ],
  output: {
    dir: 'dist',
  },
};

export default config;
