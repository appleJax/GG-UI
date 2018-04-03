const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common')
const {
  API_URL,
  DM_URL,
  TWITTER_ACCOUNT,
  TWITTER_ID
} = require('./.env').prod;

module.exports = merge(common, {
  entry: [
    '@babel/polyfill',
    './src/index.js'
  ],
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL:         JSON.stringify(API_URL),
        DM_URL:          JSON.stringify(DM_URL),
        NODE_ENV:        JSON.stringify('production'),
        TWITTER_ACCOUNT: JSON.stringify(TWITTER_ACCOUNT),
        TWITTER_ID:      JSON.stringify(TWITTER_ID)
      }
    })
  ]
});
