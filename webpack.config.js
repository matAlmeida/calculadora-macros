var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
const args = require('yargs').argv;

const build = args.p;

module.exports = {
  context: path.join(__dirname, 'src'),
  // devtool: debug ? "inline-sourcemap" : false,
  devtool: build ? undefined : 'inline-sourcemap',
  entry: './js/client.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs',
            'transform-decorators-legacy',
            'transform-class-properties',
          ],
        }
      }
    ]
  },
  output: {
    path: __dirname + '/src/',
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
