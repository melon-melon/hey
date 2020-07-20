const path = require('path')
const fs = require('fs')
var shell = require('shelljs')

module.exports = function (eleventyConfig) {
  /* This is the updated version of the webpack filter. It works like this: the first time it encounters the webpack filter, it will compile the assets to get the manifest file. Any time after that it will just skip compiling again. Asset URL's are handeled using the webpack manifest so that templates can use the original file names. Enjoy! -Sven */
  /* TODO: This works! ... Sort of... it breaks the PurgeCSS setup. So that still has to be done seperately. */
  eleventyConfig.addFilter('webpack', (value) => {
    function manifestExists() {
      return fs.existsSync(
        path.resolve(__dirname, '_site/assets/manifest.json')
      )
    }
    function lockExists() {
      return fs.existsSync('WEBPACK_RUNNING.LOCK')
    }

    const webpackPromise = () =>
      new Promise((resolve, reject) => {
        fs.createWriteStream('WEBPACK_RUNNING.LOCK').end()
        console.log('Starting webpack compilation...')
        shell.exec('npx webpack --mode development')
        console.log('Finished webpack compilation.')
        if (lockExists()) {
          fs.unlinkSync('WEBPACK_RUNNING.LOCK')
        }
        resolve()
      })

    let manifestFound = false
    async function checkForManifest() {
      if (!manifestExists()) {
        console.log('Assets manifest not found.')
        if (lockExists()) {
          /* Another webpack process is already running. */
        } else {
          console.log('Starting asset compilation.')
          await webpackPromise()
        }
      } else {
        manifestFound = true
      }
    }

    while (!manifestFound) {
      checkForManifest()
    }

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
