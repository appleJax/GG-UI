const nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const {
  TWITTER_KEY,
  TWITTER_SECRET,
  SESSION_SECRET,
  API_URL,
  APP_URL
} = require('./.env').prod;

module.exports = {
  entry: [
    '@babel/polyfill',
    './server/server.js'
  ],
  devtool: 'eval',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      Utils:  __dirname + '/src/utils'
    }
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        APP_URL:        JSON.stringify(APP_URL),
        API_URL:        JSON.stringify(API_URL),
        TWITTER_KEY:    JSON.stringify(TWITTER_KEY),
        TWITTER_SECRET: JSON.stringify(TWITTER_SECRET),
        SESSION_SECRET: JSON.stringify(SESSION_SECRET)
      }
    })
  ],
  output: {
    filename: 'server.js',
    path: __dirname + '/dist'
  }
};
