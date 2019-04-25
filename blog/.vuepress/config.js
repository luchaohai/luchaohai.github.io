const basePath = 'post'

module.exports = {
  // ***基本配置***
  base: `/${basePath}/`,
  title: '苦行僧的博客',
  description: '自律，自强',
  // HTML <head>标签，做iconfont之类的嵌入
  head: [],
  // host
  dest: basePath,
  // Google Analytics TODO
  // ga: 'UA-112738831-1'
  // serviceWorker
  // locales
  // shouldPrefetch
  // ***主题***
  theme: undefined,
  themeConfig: {
    lastUpdated: 'Last Updated'
  },
  // ***Markdown***
  markdown: {
  },
  // // ***构建流程***
  // // postcss
  // stylus
  // scss
  // sass
  // less
  serviceWorker: true,
  // webpack-merge TODO
  configureWebpack: undefined,
  // webpack-chain TODO
  chainWebpack: undefined,
  // “常青树”浏览器，代理更快的构建速度和更小的文件体积
  evergreen: true
}