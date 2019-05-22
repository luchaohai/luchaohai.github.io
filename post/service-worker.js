/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1a6eb9a00d407e94cdabf549c8aea128"
  },
  {
    "url": "aboutme.html",
    "revision": "0f915f8fd1ef9fce8449b5f02e4f20f2"
  },
  {
    "url": "assets/css/0.styles.a5c2f215.css",
    "revision": "2b16db9dfc145719d4718425e1394b82"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.80911a34.js",
    "revision": "c45171c8832a7955d416d16483ce991c"
  },
  {
    "url": "assets/js/3.8def2a67.js",
    "revision": "4ee0ccd1ee901f87eb8843c5697e31be"
  },
  {
    "url": "assets/js/4.8c67b1c7.js",
    "revision": "947b5afe2da47380a1d75488e60a6043"
  },
  {
    "url": "assets/js/5.d396d881.js",
    "revision": "9823d9c1a8b56808a3b86c035022470c"
  },
  {
    "url": "assets/js/6.4ec29e6c.js",
    "revision": "04af143e71c8c5aa32c817b8870a855e"
  },
  {
    "url": "assets/js/7.497d1e93.js",
    "revision": "80c8c7f9c1b699993cc9e0ac37d2461a"
  },
  {
    "url": "assets/js/8.14bcfab0.js",
    "revision": "08ca91b2e1033c741dc4a03483028a9d"
  },
  {
    "url": "assets/js/app.3229d76f.js",
    "revision": "791b61b0419cb074463e3b98bc7cc3f7"
  },
  {
    "url": "index.html",
    "revision": "202e97ff7cd27aed098c0752884dc20d"
  },
  {
    "url": "note/1.html",
    "revision": "d4680c85530f269335e932fa1fe4bce7"
  },
  {
    "url": "question/2019.html",
    "revision": "622aaf891574788eb48dffb4efb8f46a"
  },
  {
    "url": "question/javascript.html",
    "revision": "9fbf461754f1e99e982abd4aa0317bf2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
