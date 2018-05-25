const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
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
      Root:       __dirname,
      Styles:     path.resolve(__dirname, 'src/view/styles'),
      Src:        path.resolve(__dirname, 'src'),
      Utils:      path.resolve(__dirname, 'src/utils'),
      Icons:      'material-ui-icons',
      UI:         'material-ui'
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
  plugins: [
    new CopyWebpackPlugin([{ from: 'static' }]),
    new CleanWebpackPlugin(__dirname + '/dist'),
    new HtmlWebpackPlugin({
      template: __dirname + '/static/index.html',
      inject: 'body',
      filename: 'index.html'
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
        }
      ],
      publicPath: '/node_modules'
    })
  ],
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
