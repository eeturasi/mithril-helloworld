var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          },
        ],
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: 'sass'
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      './node_modules'
    ],
    extensions: ['.js', '.sass']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    })
  ]
};
