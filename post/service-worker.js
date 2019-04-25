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
    "revision": "61fcc846bea2f70b0a49de923ab26909"
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
    "url": "assets/js/3.292002a4.js",
    "revision": "62eb21b5701e620066aa9732d661d80c"
  },
  {
    "url": "assets/js/4.bfa8e0d9.js",
    "revision": "e3a231f87a4193ee669182f559cfde8d"
  },
  {
    "url": "assets/js/app.bfef7972.js",
    "revision": "532c5eb42b74b72e1af9c396f960d96c"
  },
  {
    "url": "index.html",
    "revision": "7517f5dc25413646fd76d3601d49067c"
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
