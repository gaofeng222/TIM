const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const cdn = {
  css: ['https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css'],
  js: [
    'https://unpkg.com/vue@next',
    'https://unpkg.com/vue-router@next',
    'https://unpkg.com/element-plus@1.0.2-beta.30/lib/index.full.js'
    // 'https://unpkg.com/element-ui@2.13.2/lib/index.js',
    // 'https://unpkg.com/dayjs@1.8.21/dayjs.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/Mock.js/1.0.0/mock-min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.1.0/vuex.min.js'
    // 'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js'
    // "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
  ]
}
module.exports = defineConfig({
  transpileDependencies: false,
  parallel: true,
  productionSourceMap: false,
  publicPath: './', // 基本路径
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('base', resolve('src/baseConfig'))
      .set('views', resolve('src/views'))
    config.when(IS_PRODUCTION, (config) => {
      // 为生产环境修改配置...
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        'element-plus': 'ElementPlus'
      })
      config.mode = 'production'

      config.plugin('html').tap((args) => {
        args[0].isProd = true
        args[0].cdn = cdn
        return args
      })
    })
    config.optimization.splitChunks({
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6, // 同时也限制了同一 priority 最大分块次数
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'all'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        },
        // 继续添加其他提取规则 注意 priority 要比 vendors 大才能提取出来
        'element-ui': {
          name: 'element-plus',
          test: /[\\/]element-plus[\\/]/,
          chunks: 'all',
          priority: 0
        },
        lodash: {
          name: 'lodash',
          test: /[\\/]lodash[\\/]/,
          chunks: 'all',
          priority: 0
        },
        nprogress: {
          name: 'nprogress',
          test: /[\\/]nprogress[\\/]/,
          chunks: 'all',
          priority: 2
        },
        mockjs: {
          name: 'mockjs',
          test: /[\\/]mockjs[\\/]/,
          chunks: 'all',
          priority: 0
        }
      }
    })
  },
  configureWebpack(config) {
    if (IS_PRODUCTION) {
      // 为生产环境修改配置...
      config.mode = 'production'
      config['performance'] = {
        //打包文件大小配置
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  },
  css: {
    sourceMap: !IS_PRODUCTION
  },
  devServer: {
    port: 3567
  }
})
