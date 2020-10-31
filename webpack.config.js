const HtmlWebpackPlugin  = require('html-webpack-plugin');
const merge   = require('webpack-merge');
const webpack = require('webpack');
const common  = require('./webpack.common');
const path    = require('path');
const ENV     = require('./.env');
const { API_URL } = ENV.dev;
const {
  DM_URL,
  FOLLOW_URL,
  TWITTER_ACCOUNT,
  TWITTER_ID
} = ENV.staging;

module.exports = merge(common, {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL:         JSON.stringify(API_URL),
        DM_URL:          JSON.stringify(DM_URL),
        FOLLOW_URL:      JSON.stringify(FOLLOW_URL),
        NODE_ENV:        JSON.stringify('dev'),
        TWITTER_ACCOUNT: JSON.stringify(TWITTER_ACCOUNT),
        TWITTER_ID:      JSON.stringify(TWITTER_ID)
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname , 'static/main.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  output: {
    filename: '[name].[hash].js'
  }
});
