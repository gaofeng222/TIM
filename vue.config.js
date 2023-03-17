const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  parallel: true,
  publicPath: './' // 基本路径
})
