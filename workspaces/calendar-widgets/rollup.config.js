import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';

export default {
  input: 'src/index.ts', // Your entry point file
  output: {
    sourcemap: true, // Generates a sourcemap file
    file: 'dist/bundle.js', // The bundled output file
    format: 'es', // Supports multiple module formats: CommonJS, AMD, and global variable
    name: 'calendar-widgets' // The global variable name for your library, if not using a module system
  },
  plugins: [resolve(), // Helps Rollup locate external modules
    commonjs(), // Converts CommonJS modules to ES modules
    typescript(), // Converts TypeScript to JavaScript
    summary() // Prints a summary of the bundle
  ]
};
