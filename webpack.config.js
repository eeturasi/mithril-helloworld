var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/app'
  ],
  output: {
    path: path.join(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoaders=1!sass-loader?indentedSyntax=sass')
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.sass']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    })
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'src')
    ]
  },
  devTool: "#source-map",
  devServer: {
    contentBase: 'build/',
    host: '0.0.0.0'
  }
};
