const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common')
const { API_URL } = require('./.env').prod

module.exports = merge(common, {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
         API_URL: JSON.stringify(API_URL),
         NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
