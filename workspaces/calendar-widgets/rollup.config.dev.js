import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import summary from 'rollup-plugin-summary';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts', // Entry point file
  external: ['react', 'react-dom'], // Mark React and ReactDOM as external dependencies
  output: {
    sourcemap: true, // Generates a sourcemap file
    file: 'dist/bundle.js', // The bundled output file
    format: 'es', // Supports multiple module formats: CommonJS, AMD, and global variable
    name: 'calendar-widgets', // The global variable name for your library, if not using a module system
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    resolve(), // Helps Rollup locate external modules
    commonjs(), // Converts CommonJS modules to ES modules
    typescript(), // Converts TypeScript to JavaScript
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react']
    }), // Transpile JSX and other React-specific syntax using Babel
    summary() // Prints a summary of the bundle
  ]
};
