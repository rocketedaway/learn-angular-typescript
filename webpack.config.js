'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDevelopment = process.env === 'development';

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
          transpileOnly: true
      }
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
        hash: isDevelopment === true,
        filename: 'index.html',
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{
      from: 'src/data',
      to: 'data'
    }])
  ],
  devtool: isDevelopment === true ? 'cheap-eval-source-map' : ''
};
