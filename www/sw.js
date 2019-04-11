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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/ionicons.js",
    "revision": "c6954b067a021334afbc5fa31f1db948"
  },
  {
    "url": "build/ionicons/chunk-033a0284.es5.js",
    "revision": "0e82bec3ea388c0eb7f992445ed48c02"
  },
  {
    "url": "build/ionicons/chunk-1ca7e569.js",
    "revision": "8b72051c47a55bb496191a4e8578e606"
  },
  {
    "url": "build/ionicons/index.es5.js",
    "revision": "280fe57d3712e4ab3c7a5891fe22c055"
  },
  {
    "url": "build/ionicons/index.js",
    "revision": "8cfed4002f71e52675ddb2d79089ee82"
  },
  {
    "url": "build/ionicons/ionicons.gfd5brvq.js",
    "revision": "8057796eb56a451144a335803d1885af"
  },
  {
    "url": "build/ionicons/ionicons.vu1zwqjb.js",
    "revision": "beed735aa8c13337be704aae182204af"
  },
  {
    "url": "build/ionicons/oevvmc4c.entry.js",
    "revision": "a1e555302e02030fc866fa7a3fa9512c"
  },
  {
    "url": "build/ionicons/oevvmc4c.sc.entry.js",
    "revision": "cee3d4a6d994c4032a45ca6b338e645f"
  },
  {
    "url": "index.html",
    "revision": "2549b5ea612d777069b7f54c94f7eceb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
