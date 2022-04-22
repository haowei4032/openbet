const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    lintOnSave: false,
    assetsDir: 'assets',
    productionSourceMap: false,
    outputDir: 'docs',
})
