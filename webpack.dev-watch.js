const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  output: {
    library: 'CraftUI',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    globalObject: 'this',
  },
});
