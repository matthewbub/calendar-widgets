import rollupConfig from './rollup.config.js';
import terser from '@rollup/plugin-terser';

export default {
  ...rollupConfig,
  plugins: [
    ...rollupConfig.plugins,
    terser()
  ]
};
