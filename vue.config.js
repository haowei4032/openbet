const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    lintOnSave: false,
    assetsDir: 'assets',
    outputDir: 'docs',

    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'OkBet'
            return args
        })
        require('fs').writeFile('./docs/CNAME', 'okbet.ga', {flatg: 'w+'}, err => null)
        return config
    }
})
