import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs', 
    },
    {
      file: 'dist/bundle.es.js',
      format: 'es', 
      exports: 'named'
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    peerDepsExternal(),
    resolve(),
    summary()
  ]
};
