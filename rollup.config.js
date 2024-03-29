import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const excluded = [
  'node_modules/**',
  'src/**/*.stories.tsx',
  '.storybook/**/*',
  '**/stories/**/*',
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true, 
    },
    {
      file: 'dist/bundle.es.js',
      format: 'es', 
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    typescript({
      exclude: excluded,
      
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      
    }),
    babel({
      exclude: excluded,
      presets: ['@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime'],
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    peerDepsExternal(),
    resolve(),
    summary()
  ]
};
