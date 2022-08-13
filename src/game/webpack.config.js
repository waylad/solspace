const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require("webpack");

module.exports = {
  entry: './src/game.ts',
  output: {
    path: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname),
    filename: 'bundle.js',
  },
  ignoreWarnings: [/Failed to parse source map/],
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        { from: 'index.html', to: 'index.html' },
      ],
    }),
    new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'] }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, './'),
    // publicPath: '/dist/',
    host: 'localhost',
    port: 8080,
    open: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      assert: require.resolve('assert'),
      fs: false,
      process: false,
      path: false,
      zlib: false,
    },
  },
}
