const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [SRC_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle-[hash:16].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "~styles/variables";',
              includePaths: [
                path.resolve(SRC_DIR, '/styles')
              ]
            }
          }]
        })
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:16].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'assets/images/logo.png'
    }),
    new ExtractTextPlugin({
      filename: 'bundle-[hash:16].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      'Tether': 'tether'
    })
  ],
  resolve: {
    alias: {
      components: SRC_DIR + '/components',
      pages: SRC_DIR + '/pages',
      assets: __dirname + '/assets',
      styles: SRC_DIR + '/styles'
    },
    extensions: ['.js', '.jsx']
  }
};
