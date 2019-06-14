/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';

import paths from './paths';
import { dependencies } from '../package.json';

export default {
  externals: [...Object.keys(dependencies || {})],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.app,
      '@common': paths.appCommon,
      '@commonComp': paths.appCommonComp,
      '@commonScss': paths.appCommonScss,
      '@commonStore': paths.appCommonStore,
      '@commonStyled': paths.appCommonStyled,
      '@comp': paths.appComp,
      '@con': paths.appCon,
      '@scss': paths.appScss,
      '@store': paths.appStore,
      '@styled': paths.appStyled,
      '@util': paths.appUtil,
      '@lib': paths.appLib,
      '@tool': paths.appTool,
      '@static': paths.appStatic,
      '@icon': paths.appIcon,
      '@image': paths.appImage,
      '@photo': paths.appPhoto,
      '@music': paths.appMusic,
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),

    new webpack.NamedModulesPlugin()
  ]
};
