const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: false,
  parallel: true,
  publicPath: './', // 基本路径
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('base', resolve('src/baseConfig'))
      .set('views', resolve('src/views'))
  },
  devServer: {
    port: 3567
  }
})
