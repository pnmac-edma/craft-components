const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  entry: './examples/src/index.js',
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'examples/src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
