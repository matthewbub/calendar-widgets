import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js', // Your entry point file
  output: {
    file: 'dist/bundle.js', // The bundled output file
    format: 'es', // Supports multiple module formats: CommonJS, AMD, and global variable
    name: 'calendar-widgets', // The global variable name for your library, if not using a module system
  },
  plugins: [
    resolve(), // Helps Rollup locate external modules
    commonjs(), // Converts CommonJS modules to ES modules
  ],
};