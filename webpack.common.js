const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, 'src/actions/'),
      Ajax: path.resolve(__dirname, 'src/ajax/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Icons: 'material-ui-icons',
      Images: path.resolve(__dirname, 'src/static/images/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Src: path.resolve(__dirname, 'src/'),
      UI: 'material-ui',
      Utils: path.resolve(__dirname, 'src/utils/')
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
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' }
          ]
        }),
      },
      { test: /\.(png|jpg|jpeg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'static' } ]),
    new CleanWebpackPlugin(__dirname + '/dist'),
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: __dirname + '/static/index.html',
      inject: 'body'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
