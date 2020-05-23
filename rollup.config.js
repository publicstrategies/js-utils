// @ts-check
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

/** @type {import('rollup').RollupOptions} */
const config = {
  input: './src/index.ts',
  plugins: [
    typescript({
      tsconfigOverride: {
        exclude: ['src/**/*.spec.ts'],
        include: ['src/**/*.ts'],
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
