const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('cssnano')({ preset: 'default' })],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new uglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.min.css',
    }),
    //new BundleAnalyzerPlugin(),
  ],
};
