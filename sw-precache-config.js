module.exports = {
  stripPrefix: "build/",
  staticFileGlobs: [
    "build/*.html",
    "build/static/**/!(*map*)",
    "build/bhajan-index2.json",
    "build/*.min.css",
    "build/*.min.js",
    "build/*.png",
    "build/*.jpg",
    "build/*.ico",
    "build/pdfs/*.pdf"
  ],
  navigateFallback: "build/index.html",
  ignoreUrlParametersMatching: [/./],
  importScripts: ["firebase-messaging-sw.js"],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  maximumFileSizeToCacheInBytes: 4097152,
  swFilePath: "build/service-worker.js",
  runtimeCaching: [
    {
      urlPattern: /cdn.polyfill.io.v2.polyfill.min.js/,
      handler: "fastest"
    }
  ]
};
