// @ts-check
import typescript from 'rollup-plugin-typescript2';

/** @type {import('rollup').RollupOptions} */
const config = {
  input: './src/index.ts',
  plugins: [typescript()],
  output: {
    dir: 'dist',
  },
};

export default config;
