const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Actions:    path.resolve(__dirname, 'src/model/actions'),
      Components: path.resolve(__dirname, 'src/view/components'),
      Constants:  path.resolve(__dirname, 'src/model/constants'),
      Containers: path.resolve(__dirname, 'src/view/containers'),
      Data:       path.resolve(__dirname, 'src/view/data'),
      Images:     path.resolve(__dirname, 'src/static/images'),
      Reducers:   path.resolve(__dirname, 'src/model/reducers'),
      Root:       path.resolve(__dirname),
      Styles:     path.resolve(__dirname, 'src/view/styles'),
      Src:        path.resolve(__dirname, 'src'),
      Utils:      path.resolve(__dirname, 'src/utils'),
      Icons:      '@material-ui/icons',
      UI:         '@material-ui/core'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        }
      },
      { test: /\.(png|jpg|jpeg)$/,
        use: 'file-loader'
      }
    ]
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'static' }]),
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static/main.html'),
      inject: 'body',
      filename: 'main.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
