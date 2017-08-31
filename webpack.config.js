const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const args = require('yargs').argv;

const build = args.p;

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: build ? undefined : 'inline-sourcemap',
  entry: './js/client.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-0'],
            plugins: [
              'react-html-attrs',
              'transform-decorators-legacy',
              'transform-class-properties',
            ],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false }),
  ],
};
