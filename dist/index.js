const fs = require("fs")
const { generateFonts, RunnerOptions, FontAssetType } = require('fantasticon')

const src = `./professional`
const dist = `./prof/icons`

if (!fs.existsSync(src)) {
    throw new Error('Directory /icons does not exist.')
}

if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist, { recursive: true });
}

const config = {
    name: 'icons',
    inputDir: src,
    outputDir: dist,
    fontTypes: ['woff2']
}

generateFonts(config)

module.exports = { generateFonts, config }