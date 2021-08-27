const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: 'main.js',
  },
  plugins: [
    new WebpackManifestPlugin({ publicPath: '/assets/' }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
}
