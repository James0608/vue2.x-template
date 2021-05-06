// official document: https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  // 部署应用包时的基本 URL, 默认值为 '/'
  publicPath: '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录, 默认值为 ‘dist’
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录, 默认值为‘’
  assetsDir: '',
  // 在 multi-page 模式下构建应用
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'vue2.x-template',
    },
  },
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效, 默认值为 'default'
  lintOnSave: 'default',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  // details：https://cli.vuejs.org/zh/guide/webpack.html
  configureWebpack: {
    // 所有 webpack-dev-server 的选项都支持
    devServer: {
      port: 8080,
      proxy: {
        '/api': {
          target: '<url>',
          ws: true,
          changeOrigin: true,
        },
      },
    },
  },
  // details：https://cli.vuejs.org/zh/guide/webpack.html
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => options);
  },
  css: {
    requireModuleExtension: true,
    // extract: false,
    sourceMap: false,
    loaderOptions: {
      // css: {
      //   // 这里的选项会传递给 css-loader
      // },
      // postcss: {
      //   // 这里的选项会传递给 postcss-loader
      // },
    },
  },
  // 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。
  pluginOptions: {
    foo: {
      // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
    },
  },
};
