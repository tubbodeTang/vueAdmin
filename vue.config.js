module.exports = {
  publicPath: './',
  css: {
    sourceMap: true, // 开启 CSS source maps
    loaderOptions: {
      // postcss: {
      //   plugins: [
      //     require('postcss-pxtorem')({
      //       rootValue: 192, // 换算的基数
      //       // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
      //       // 如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
      //       selectorBlackList: ['el'], // 忽略el 开头的类名  不转换 element-ui 样式
      //       propList: ['*'],
      //       // exclude: /node_modules/
      //       // 则可以使用exclude function返回true，该文件将被忽略。
      //       // 包含node_modules 或者 不包含 sidebar > 0包含  < 0 不包含
      //       // file.indexOf('node_modules') !== -1
      //       exclude: function (file) {
      //         if (file.indexOf('node_modules') >= 0 || file.indexOf('statusCom') < 0) {
      //           return true
      //         }
      //       }
      //     })
      //   ]
      // },
      // 注入 sass 的 mixin 和 variables 到全局
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        // 注入 sass 的 mixin 和 variables 到全局
        prependData: `
                      @import '~@/assets/styles/_handle.scss';
                      @import '~@/assets/styles/_mixin.scss';
                      @import '~@/assets/styles/_var.scss';
                     `
      }
    }
  },
  // serve:{
  //   proxyTable: {
  //     detail: https://cli.vuejs.org/config/#devserver-proxy
  //     '/api': {
  //       target: 'http://localhost:8081',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  // },
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  configureWebpack: {
    devtool: 'souce-map'
  }
}
