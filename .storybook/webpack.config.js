

// Webpack config for development
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

// var staticPath = path.resolve(__dirname, '../static');

module.exports = {
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, include: [path.resolve(__dirname, '..')], loaders: ['happypack/loader?id=jsx']},
      { test: /\.scss$/, loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]_[hash:base64:5]!postcss-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]_[hash:base64:5]!postcss-loader' },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '..'),
      'src',
      'node_modules'
    ],
  },
  plugins: [
    new HappyPack({
      id: 'jsx',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool
    }),

    // hot reload
    new webpack.IgnorePlugin(/webpack-stats\.json$/, /moment$/),
  ],
};

