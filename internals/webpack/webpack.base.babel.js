/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  module: {
    rules: [{
      test: /\.js$/, // Transform all .js files required somewhere with Babel
      use: [{
        loader: 'babel-loader',
        query: options.babelQuery,
      }],
      exclude: /node_modules/,
    },
    {
      // Do not transform vendor's CSS with CSS-modules
      // The point is that they remain in global scope.
      // Since we require these CSS files in our JS or CSS files,
      // they will be a part of our compilation either way.
      // So, no need for ExtractTextPlugin here.
      test: /\.css$/,
      include: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
      ],
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
    {
      test: /\.(eot|svg|png|ttf|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
      }],
    },
    {
      test: /\.(jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65,
            },
            gifsicle: {
              interlaced: false,
            },
          },
        },
      ],
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
      }],
    },
    {
      test: /\.(mp4|webm)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1000,
        },
      }],
    }],
  },
  plugins: options.plugins.concat([
    new Dotenv({
      path: '.env',
    }),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        GRAPH_URL: JSON.stringify(process.env.GRAPH_URL),
        WS_URL: JSON.stringify(process.env.WS_URL),
        API_SENTRY_DSN: JSON.stringify(process.env.API_SENTRY_DSN),
      },
    }),
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\\\/]lang$/, /^\.\/(en-gb|de|pl)$/),
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
  ]),
  resolve: {
    alias: {
      app: path.resolve(__dirname, './../../app'),
      common: path.resolve(__dirname, '../../app/common'),
      components: path.resolve(__dirname, '../../app/components'),
    },
    modules: ['app', 'node_modules', 'common', 'components'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
