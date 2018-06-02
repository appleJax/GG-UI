const WebpackCdnPlugin = require('webpack-cdn-plugin');
const merge = require('webpack-merge')
const webpack = require('webpack');
const common = require('./webpack.common')
const ENV = require('./.env');
const {
  API_URL,
  DM_URL,
  FOLLOW_URL,
  TWITTER_ACCOUNT,
  TWITTER_ID
} = ENV.staging;

module.exports = merge(common, {
  entry: [
    '@babel/polyfill',
    './src/index.js'
  ],
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:        JSON.stringify('production'),
        API_URL:         JSON.stringify(API_URL),
        DM_URL:          JSON.stringify(DM_URL),
        FOLLOW_URL:      JSON.stringify(FOLLOW_URL),
        TWITTER_ACCOUNT: JSON.stringify(TWITTER_ACCOUNT),
        TWITTER_ID:      JSON.stringify(TWITTER_ID)
      }
    }),
    new WebpackCdnPlugin({
      modules: [
        {
          name: 'react',
          var: 'React',
          path: `umd/react.${process.env.NODE_ENV}.min.js`
        },
        {
          name: 'react-dom',
          var: 'ReactDOM',
          path: `umd/react-dom.${process.env.NODE_ENV}.min.js`
        },
        {
          name: 'axios',
          var: 'axios',
          path: 'dist/axios.min.js'
        }
      ],
      publicPath: '/node_modules'
    })
  ],
  output: {
    filename: '[name].[chunkhash].js'
  }
});
