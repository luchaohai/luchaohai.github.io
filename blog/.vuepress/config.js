const basePath = 'post'

module.exports = {
  // ***基本配置***
  base: `/${basePath}/`,
  title: '苦行僧的博客',
  description: '自信，自律，自强',
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
    // 自定义的搜索，可以做tags方向
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },
    nav: [
      { text: '首页', link: '/' },
      // 做一个大分类……
      {
        text: '技术',
        items: [
          { text: 'vue', link: '/'}
        ]
      },
      // 随笔以时间纬度，一个主题发散
      {
        text: '随笔',
        items: [
          { text: '2019', link: '/note/1.md'},
          { text: '2019', link: '/note/1.md'}
        ]
      },
      {
        text: '资源',
        items: [
          { text: '2019', link: '/'}
        ]
      },
      {
        text: '问题',
        items: [
          { text: '2019', link: '/question/2019.md'},
          { text: 'javascript', link: '/question/javascript.md'}
        ]
      },
      // 求职的履历
      { text: '关于我', link: '/aboutme.md' }
      // 分类也不会做 TODO
      // 目前只能人为地做分类处理
      // { text: '分类', link: '/guide/' },
      // 归档也不会做 TODO
      // { text: '归档', link: 'https://google.com' },
      // 标签系统还不会做 TODO
      // { text: '标签', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ],
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
