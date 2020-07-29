/* eslint global-require: 0 */
/* typescript-eslint no-var-requires: 0 */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./client/src/Index.tsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules|packages/,
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  browsers: ['> 1%'],
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'client/dist/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },

  devServer: {
    contentBase: './client/dist',
    publicPath: '/',
    host: 'localhost',
    historyApiFallback: true,
    // respond to 404s with index.html
    inline: true,
    hot: true,
  },
};
