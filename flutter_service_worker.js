'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5eab81829974eb7ea1cc05a464cf9dc3",
"assets/assets/icons/back.svg": "bf2adb7b6884a4e4dc54c619f6728d78",
"assets/assets/icons/bathtub.svg": "e1c0bdb572f61a8beff6ec17265c89bd",
"assets/assets/icons/box.svg": "5a594650a9f3a4c225edc7710b537692",
"assets/assets/icons/card.svg": "a6fbfb55d47f92788514b70d8616c217",
"assets/assets/icons/cart.svg": "ac6d61d69df1174a56992f0aca071845",
"assets/assets/icons/chat.svg": "895a6ba28114d4dc3ee3a85e977baa72",
"assets/assets/icons/chest.svg": "ecb42c14075b84516e38e23a86de2624",
"assets/assets/icons/clothes.svg": "62375d16c5c7b8a223f26ac2869d66c2",
"assets/assets/icons/controls.svg": "94a3b32413e5c676b085895163819b95",
"assets/assets/icons/delivery.svg": "3dd0a91eb102fa960e67031c4bb7dcb2",
"assets/assets/icons/desk.svg": "d46ac35091ff78db002759eb3b34d3c7",
"assets/assets/icons/home.svg": "aeb5cf5ca76387695abd4577342b2f40",
"assets/assets/icons/kitchen.svg": "2d7fe2c151a3bc9b75dbabce411af568",
"assets/assets/icons/list.svg": "cf3bdccdc66b0066b89ee8efa9385f28",
"assets/assets/icons/messenger.svg": "cf5a34d5a2c18ec412cb7cc0e64d9a30",
"assets/assets/icons/profile.svg": "6634bf657e0f601c0f199be9c74892f6",
"assets/assets/icons/search.svg": "a8b5cc03e42f46ac8dfb64562ee6b461",
"assets/assets/icons/skincare.svg": "23b11a93b98c2a283aa9105ff5da2000",
"assets/assets/icons/sort.svg": "6109db326a0196344785e00dd8ee3d98",
"assets/assets/icons/tag.svg": "a18fcefaff43e21b54dafa149b4639dc",
"assets/assets/icons/tick.svg": "7b78251ccda381e5ea50e72bc8773a36",
"assets/assets/icons/toys.svg": "21bee1f9105ff4e7133e47c222edf0ce",
"assets/assets/icons/transfer.svg": "d09078e58bbda20457f614e8d865e295",
"assets/assets/icons/wallet.svg": "c4d6cd4e8b452e55e9032b0306c95fbf",
"assets/assets/images/carousel/august_promo.jpg": "7d776beda543a9bc04b5f83cfd8eae53",
"assets/assets/images/carousel/delivery.jpg": "136df7a8e27f592fd9d628f9ad68c821",
"assets/assets/images/carousel/quality.jpg": "7d003479f68e30be414a167c180661ae",
"assets/assets/images/furniture/bean_sprout_machine.png": "6e905d89c4b3221a67f44780f50b1227",
"assets/assets/images/furniture/face_brush.png": "897a44218cd02051d410cc56f01d020d",
"assets/assets/images/furniture/face_foam.png": "3671c9359a97b683742b81d01d7df6aa",
"assets/assets/images/furniture/face_mask.png": "e4d924409b53ad6217292d9b047521c8",
"assets/assets/images/furniture/face_shield.png": "36a888798a999828bd7961b5da79fa17",
"assets/assets/images/furniture/furniture1.png": "89a4106537edcdb17af33527dd73d66e",
"assets/assets/images/furniture/furniture2.jpg": "c8ba1f94de9169d4cfefbab0ec3a9768",
"assets/assets/images/furniture/furniture3.png": "c49bf03f3309412c37eb10634243238b",
"assets/assets/images/furniture/furniture4.jpg": "6f6295576f7f91b7f453b7f10c42cd7f",
"assets/assets/images/furniture/furniture5.jpg": "4f6bb86521a7caf7af92a21570505bed",
"assets/assets/images/furniture/furniture6.jpg": "9067aa51562e13118f681ccc27e2e1f3",
"assets/assets/images/furniture/furniture7.png": "9ccbfc309393131dd5e23fd02b4538bc",
"assets/assets/images/furniture/girl_toy.png": "2c64596e3552a9ff3f10d39677cb1b56",
"assets/assets/images/furniture/items/CHair%25202.png": "a7f63e470abd5a71eba513129c76c479",
"assets/assets/images/furniture/items/chair3.png": "05385405a1534f0d48565de840b6c93e",
"assets/assets/images/furniture/items/dacey.png": "154583f6a1d38dc5ba65caaef290850f",
"assets/assets/images/furniture/items/elly.png": "d1c9cd57071aec666bd66a054ac97f09",
"assets/assets/images/furniture/items/ezgif.com-crop.png": "b1352d629e43ecea411d12d6e718c2ed",
"assets/assets/images/furniture/items/table%25202.png": "e43085a3f0ac3c24e366d9ea426de28d",
"assets/assets/images/furniture/lunchbox1.png": "7b2154563cc6a6cc5f6a99cae786a53f",
"assets/assets/images/furniture/polo_belt.png": "4002f41721acb43109f2ed50267f4aea",
"assets/assets/images/furniture/pregnant_dress.png": "a4ab04d21cc725e09d41853354657cdf",
"assets/assets/images/furniture/vege_container.png": "5ade0845a863614df1dea9fa89d8738d",
"assets/assets/images/splash1.png": "2ba885abb05d44cf059f509fa2eaea50",
"assets/assets/images/splash2.png": "93c84d4d10dc0a176c46168a6f64820c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "116d676c6480dbc0070d1e7e171cb6a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c27de79313dc68c55b1e10e5306f49e4",
"/": "c27de79313dc68c55b1e10e5306f49e4",
"main.dart.js": "2c195f5b29ebf83bbccfcb062192f554",
"manifest.json": "b161dd0f81179790c966d9c8c1f0b34a",
"version.json": "d9f5a73c0add8127c6a74939f0bb7d05"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
