module.exports = ({ file, options, env }) => ({
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'postcss-cssnext': {},
    'postcss-safe-curly-braces': {},
    cssnano:  env === 'production'  ? {} : false,
  },
});
