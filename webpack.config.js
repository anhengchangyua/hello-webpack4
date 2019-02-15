const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  ],
};
