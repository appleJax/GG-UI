const merge = require('webpack-merge')
const webpack = require('webpack');
const common = require('./webpack.common')

module.exports = merge(common, {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
