const path = require('path')
const fs = require('fs')

module.exports = function (eleventyConfig) {
  // Custom filter for webpack manifest. Enjoy! -Sven
  eleventyConfig.addFilter('webpack', (value) => {
    const webpackManifestFile = fs.readFileSync(
      path.resolve(__dirname, '_site/assets/manifest.json')
    )
    const webpackManifest = JSON.parse(webpackManifestFile)
    return webpackManifest[value]
  })

  return {
    dir: { input: 'src', output: '_site' },
  }
}
