const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  // entry: { app: ['@babel/polyfill', './src/index.js'], hello: './src/hello.js' },
  entry: { app: './src/index.js', hello: './src/hello.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].bundle.js',
    filename: '[name]-[hash].bundle.js',
  },
  devtool: false, //开发者模式
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          // presets: [
          //   [
          //     '@babel/preset-env',
          //     {
          //       debug: true, //查看安装的插件
          //     },
          //   ],
          // ],
          // plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]],
          // },
        },
      },
      {
        test: /\.css$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'less-loader', // compiles Less to CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Admin',
      filename: 'admin.html',
      template: 'public/index.html',
      chunks: ['hello'],
    }),
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ['app'],
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    // host: '0.0.0.0',
  },
};
