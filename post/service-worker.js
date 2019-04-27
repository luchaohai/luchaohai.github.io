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
    "revision": "0367f15aaff37fd0160089d64ef7f5ce"
  },
  {
    "url": "aboutme.html",
    "revision": "65f57799291f9536e107ac5c76e0d81d"
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
    "url": "assets/js/3.cdc1955e.js",
    "revision": "8553eac99a5daeec2a1c5db979a9ed66"
  },
  {
    "url": "assets/js/4.0aabec82.js",
    "revision": "5082fb98baf34153c82b67ae56e769fe"
  },
  {
    "url": "assets/js/5.141f56e3.js",
    "revision": "ada11513ff080123db8e22dc66751f9f"
  },
  {
    "url": "assets/js/6.48a2bd5d.js",
    "revision": "20b5fbf338b5f7b16e2afbdcb1d07ea7"
  },
  {
    "url": "assets/js/app.f11e88dd.js",
    "revision": "a4cdecbb3605e877cfd4c4f98bdf0123"
  },
  {
    "url": "index.html",
    "revision": "372b387ab953286dc2addb847729a0e5"
  },
  {
    "url": "note/1.html",
    "revision": "a50dbad3896bbf9c55191d46d35b6d10"
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
