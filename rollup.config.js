// rollup.config.js
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  plugins: [
    css(),
    vue({ css: false }),
    resolve(),
    commonjs(),
  ],
  input: './src/HighlightableInput.vue',
  output: {
    file: './dist/vue-highlightable-input.js',
    format: 'es'
  },
};
