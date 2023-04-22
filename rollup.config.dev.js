import rollupConfig from './rollup.config.js';

export default {
  ...rollupConfig,
  plugins: [
    ...rollupConfig.plugins,
    // add dev plugins here
  ]
};
