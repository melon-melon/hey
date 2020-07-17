const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets'),
    filename: 'main.js',
  },
  plugins: [new ManifestPlugin({ publicPath: '/assets/' })],
}
