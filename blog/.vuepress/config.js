const basePath = 'post'

module.exports = {
  // meta
  title: '苦行僧的博客',
  description: '自律，自强',
  // vuepress cofnig
  dest: basePath,
  base: `/${basePath}/`,
  serviceWorker: true,
  evergreen: true,
  ga: 'UA-112738831-1'
}