"use strict";

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const getStyleLoaders = (cssOptions = {}) => {
  const loaders = [
    isDevelopment && require.resolve('style-loader'),
    !isDevelopment && {
      loader: MiniCssExtractPlugin.loader
    },
    cssOptions.modules && require.resolve('css-modules-typescript-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss',
        plugins: () => [
          require('autoprefixer')
        ],
      },
    },
    {
      loader: require.resolve('resolve-url-loader')
    },
    {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: true,
      },
    }
  ].filter(Boolean);
  return loaders;
};

module.exports = {
  mode: isDevelopment ? 'development' : 'production',

  // Set debugging source maps to be "inline" for
  // simplicity and ease of use
  devtool: 'inline-source-map',

  // The application entry point
  entry: path.resolve(__dirname, 'src', 'main.tsx'),

  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isDevelopment ? 'bundle.js' : 'bundle.[hash].js',
    chunkFilename: isDevelopment ? '[name].js' : '[name].[hash].js',
  },

  // Setup dev server stuff
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    stats: 'errors-only'
  },

  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(),
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders({
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        }),
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },

  // File extensions to support resolving
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Typescript',
      template: path.resolve(__dirname, 'src', 'index.tpl.html')
    }),

    !isDevelopment &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
  ].filter(Boolean)
};
