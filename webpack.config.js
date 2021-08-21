const webpack = require('webpack')
const path = require('path')
const config = require('config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const sourceMap = isDev

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          !isDev
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/'
                }
              }
            : {
                loader: 'style-loader'
              },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        exclude: [/fonts/],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
              publicPath: '/images'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
              bypassOnDebug: true,
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                speed: 4
              },
              mozjpeg: {
                progressive: true
              }
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.(sa|sc|c)ss$/
        },
        use: [
          'babel-loader',
          {
            loader: '@svgr/webpack',
            options: {
              native: true
            }
          },
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'files',
              name: '[name].[ext]',
              publicPath: '/files'
            }
          },
        ]
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.png',
      '.svg'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(path.resolve(__dirname, './'), 'src')
    }
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({ CONFIG: JSON.stringify(config) }),
    new FaviconsWebpackPlugin({
      logo: path.join(path.resolve(__dirname, './'), '/src/assets/images/favicon.png'),
      prefix: 'images/favicons/',
      favicons: {
        appName: 'Fuse network',
        appDescription: 'Fuse network - on-board your users to decentralized finance',
        developerName: null,
        developerURL: null,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false
        }
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
      publicPath: '/'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}
