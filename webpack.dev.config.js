const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'src/static/images/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers')
    }
  },
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader',
              options: {
                includePaths: ["node_modules/normalize-scss/sass"]
              }
            }
          ]
        }),
      },
      { test: /\.(png|jpg|jpeg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'src/static' } ]),
    new CleanWebpackPlugin(__dirname + '/dist'),
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/static/index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
