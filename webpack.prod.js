const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common')
const ENV = require('./.env');
const {
  API_URL,
  DM_URL,
  FOLLOW_URL,
  TWITTER_ACCOUNT,
  TWITTER_ID
} = ENV.prod;

module.exports = merge(common, {
  entry: [
    '@babel/polyfill',
    './src/index.js'
  ],
  mode: 'production',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:        JSON.stringify('production'),
        API_URL:         JSON.stringify(API_URL),
        DM_URL:          JSON.stringify(DM_URL),
        FOLLOW_URL:      JSON.stringify(FOLLOW_URL),
        TWITTER_ACCOUNT: JSON.stringify(TWITTER_ACCOUNT),
        TWITTER_ID:      JSON.stringify(TWITTER_ID)
      }
    })
  ]
});
