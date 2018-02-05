const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common')

module.exports = merge(common, {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
         API_URL: process.env.API_URL
      }
    })
  ]
});
