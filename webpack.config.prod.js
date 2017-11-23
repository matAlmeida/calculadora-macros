const webpack = require('webpack');
const path = require('path');
const args = require('yargs').argv;
const CompressionPlugin = require('compression-webpack-plugin');

const build = args.p;

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: build ? undefined : 'inline-sourcemap',
  entry: './client.js',
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
};
