const merge   = require('webpack-merge');
const webpack = require('webpack');
const common  = require('./webpack.common');
const { API_URL, TWITTER_ACCOUNT } = require('./.env').dev;

module.exports = merge(common, {
  entry: [
    '@babel/polyfill',
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
    new webpack.DefinePlugin({
      'process.env': {
        API_URL:         JSON.stringify(API_URL),
        NODE_ENV:        JSON.stringify('dev'),
        TWITTER_ACCOUNT: JSON.stringify(TWITTER_ACCOUNT)
      }
    })
  ]
});
