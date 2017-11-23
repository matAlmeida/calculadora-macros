const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'inline-sourcemap',
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
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ],
};
