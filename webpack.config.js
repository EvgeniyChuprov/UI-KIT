const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/img/[name].[ext]',
              outputPath: './',
              useRelativePath: true
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75
              },
              mozpng: {
                progressive: true,
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/favicons/[name].[ext]',
              useRelativePath: true
            }
          }
        ]

      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              outputPath: './',
              useRelativePath: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit.html',
      template: './src/ui-kit.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'recording.html',
      template: './src/recording.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'online.html',
      template: './src/online.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'staff.html',
      template: './src/staff.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'discount.html',
      template: './src/discount.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/contacts.pug'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin([
      './dist/*.*'
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {
          discatdComments: {
            removeAll: true
          }
        }]
      },
      canPrint: true
    })
  ]
}