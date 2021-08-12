'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ca2fb3a0e78ce04950f59a3d53309f7a",
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
"assets/assets/images/carousel/august_promo.jpg": "8ce6f7dceb31d80e42aa147c6b07733b",
"assets/assets/images/carousel/delivery.jpg": "eaec77888f4dcde2ea0c0cc899c14df1",
"assets/assets/images/carousel/quality.jpg": "fdb23e6e2b5316d3f7c9ec043e9d5e9f",
"assets/assets/images/products/beauty/face_brush/face_brush.png": "231cad0cbecdba0422efb0a992897caa",
"assets/assets/images/products/beauty/face_brush/face_brush1.jpg": "60d329754ad20738eed0d35201f60a1a",
"assets/assets/images/products/beauty/face_brush/face_brush2.jpg": "66e187a8b8504385db2ed7135968ec50",
"assets/assets/images/products/beauty/face_brush/face_brush3.jpg": "b5f8a4e798087998d736e9f5b9a187be",
"assets/assets/images/products/beauty/face_brush/face_brush4.jpg": "5009aa6aaae7ccbd62952c73e4ac9998",
"assets/assets/images/products/beauty/face_foam/face_foam.png": "f237352f14582877cd4f7e98a0b1c4fa",
"assets/assets/images/products/beauty/face_foam/face_foam1.jpg": "513a46350b8e21269d316ee681bc0e6b",
"assets/assets/images/products/beauty/face_foam/face_foam2.jpg": "5dfd86aeb6e9b8cc1685cdcbb7490c2a",
"assets/assets/images/products/beauty/face_foam/face_foam3.jpg": "ca1305d42767132f3cd728aa76eabae8",
"assets/assets/images/products/beauty/face_foam/face_foam4.jpg": "46025fe38001051f92aeee80a124d41b",
"assets/assets/images/products/beauty/face_mask/face_mask.png": "ffe34c0834b2cbe91501f8e29cc6d1d2",
"assets/assets/images/products/beauty/face_mask/face_mask1.jpg": "6cc9fe5cb07eeea8cf194a9edda10b88",
"assets/assets/images/products/beauty/face_mask/face_mask2.jpg": "fa418640e7276eec3fb4768fc1a51161",
"assets/assets/images/products/beauty/face_mask/face_mask3.jpg": "ddd7c6f35a921a4438f7717b3edfd65a",
"assets/assets/images/products/beauty/face_mask/face_mask4.jpg": "ae98bb6f4a483416dd33cb4f3942993a",
"assets/assets/images/products/fashion/face_shield/face_shield.png": "c76847a31b7798b30faa5db469e34ebd",
"assets/assets/images/products/fashion/face_shield/face_shield1.jpg": "b8259a8f88af29d9b4cba6da0418bafe",
"assets/assets/images/products/fashion/face_shield/face_shield2.jpg": "3aa7b5ed6562cee52826655a6efafbe5",
"assets/assets/images/products/fashion/face_shield/face_shield3.jpg": "6be058c7d1a11fd91e1c666cc05190c3",
"assets/assets/images/products/fashion/face_shield/face_shield4.jpg": "5c90cd46a7beef6e54e339077df30c66",
"assets/assets/images/products/fashion/polo_belt/pollo_belt1.jpg": "59f2cc1b9fa807d0dff92160683f42e2",
"assets/assets/images/products/fashion/polo_belt/pollo_belt2.jpg": "b4cae4fbfb6015e4f07831065935618f",
"assets/assets/images/products/fashion/polo_belt/pollo_belt3.jpg": "5a28e2d338d00bc2522d6cbbc6ad197f",
"assets/assets/images/products/fashion/polo_belt/pollo_belt4.jpg": "c3b9c944aaf8305cc46e59083ac50dfc",
"assets/assets/images/products/fashion/polo_belt/polo_belt.png": "b067327cb2a24733afc7fcb6d6582dcc",
"assets/assets/images/products/fashion/pregnant_dress/pregnant_dress.png": "20eaeef9a06ff0eebd062f4747130aae",
"assets/assets/images/products/fashion/pregnant_dress/pregnant_dress1.jpg": "a16ba897e6a0a6641913299a32c147fd",
"assets/assets/images/products/fashion/pregnant_dress/pregnant_dress2.jpg": "b127c89bc4bef6d6d34044a8d7d76669",
"assets/assets/images/products/fashion/pregnant_dress/pregnant_dress3.jpg": "0733c2393eb4fb97853656c5f444f168",
"assets/assets/images/products/fashion/pregnant_dress/pregnant_dress4.jpg": "4ca69485da6bd3991e6fbf7f4a95f3d7",
"assets/assets/images/products/home/bean_sprout_machine/bean_sprout_machine.png": "cbb2f276f61777489026a9e3925c3a69",
"assets/assets/images/products/home/bean_sprout_machine/bean_sprout_machine1.jpg": "4210825dc0861b1f99ab32f715ae2a5f",
"assets/assets/images/products/home/bean_sprout_machine/bean_sprout_machine2.jpg": "37325f9961d03b10362678119306ff96",
"assets/assets/images/products/home/bean_sprout_machine/bean_sprout_machine3.jpg": "6854cbddf58bad478a304cd36fc07b24",
"assets/assets/images/products/home/bean_sprout_machine/bean_sprout_machine4.jpg": "b80e381e2172e9005e96864b2b49737e",
"assets/assets/images/products/home/electric_lunchbox/electric_lunchbox.png": "fd93840068843a50dd0dc62cb47ab26b",
"assets/assets/images/products/home/electric_lunchbox/electric_lunchbox1.jpg": "911ec348608fb9fad7a93c07df0a12b8",
"assets/assets/images/products/home/electric_lunchbox/electric_lunchbox2.jpg": "ff661d98e7d31a8cdff0824f96a188b5",
"assets/assets/images/products/home/electric_lunchbox/electric_lunchbox3.jpg": "d4b19b611ed28a9222604177b5a17ff3",
"assets/assets/images/products/home/electric_lunchbox/electric_lunchbox4.jpg": "f451dd26d26ff9cadbe65c7ad44714a7",
"assets/assets/images/products/home/vege_container/vege_container.png": "22585053aad666002a1197254433f06d",
"assets/assets/images/products/home/vege_container/vege_container1.jpg": "0bc8b988318c3d8236d9570bab782c99",
"assets/assets/images/products/home/vege_container/vege_container2.jpg": "0f82fd61102010ad805dab0f2184a5e5",
"assets/assets/images/products/home/vege_container/vege_container3.jpg": "fb1121b284005821ef4a9326d7598284",
"assets/assets/images/products/home/vege_container/vege_container4.jpg": "b17ff580bfab7a85d74beb39043769a7",
"assets/assets/images/products/kids/facechange_cube/facechange_cube.png": "2c7bbbcd9698f1e05b4b1539ead8af2d",
"assets/assets/images/products/kids/facechange_cube/facechange_cube1.jpg": "4dbe39349045777722f525c6f4b74e45",
"assets/assets/images/products/kids/facechange_cube/facechange_cube2.jpg": "3eeb8230b3aac922c0e088efc4420c2b",
"assets/assets/images/products/kids/facechange_cube/facechange_cube3.jpg": "5e1645c7ef157359f01700502a54222c",
"assets/assets/images/products/kids/facechange_cube/facechange_cube4.jpg": "6c9efdd9e27742e8243c44934028da16",
"assets/assets/images/products/kids/girl_toy/girl_toy.png": "01a43af2e73ac295ae3da1365d9849cd",
"assets/assets/images/products/kids/girl_toy/girl_toy1.jpg": "b97af7792a6f9aae91e3eabb1a539f06",
"assets/assets/images/products/kids/girl_toy/girl_toy2.jpg": "29d226aacf0e8d94ed8cc74c228199b8",
"assets/assets/images/products/kids/girl_toy/girl_toy3.jpg": "fbf6117f607ae740e4c1f6d77d49c38b",
"assets/assets/images/products/kids/girl_toy/girl_toy4.jpg": "fce9887afe5a8e80fc0fc24811be0ce4",
"assets/assets/images/products/kids/solid_geometry_puzzle/geometry_puzzle.png": "5e4793cafdc6c7389f7bd6d5110ce306",
"assets/assets/images/products/kids/solid_geometry_puzzle/geometry_puzzle1.jpg": "1c7134467bf07b6afb8f7e2cf5863a27",
"assets/assets/images/products/kids/solid_geometry_puzzle/geometry_puzzle2.jpg": "61da0de1bb54a2800f049e840c785807",
"assets/assets/images/products/kids/solid_geometry_puzzle/geometry_puzzle3.jpg": "69c04092ac2b7bac60505e3409ff1e8a",
"assets/assets/images/products/kids/solid_geometry_puzzle/geometry_puzzle4.jpg": "168eb4df295157485cd00100ddc9064c",
"assets/assets/videos/bean_sprout_machine.mp4": "07747167b48ffe6b171dcebb833161ed",
"assets/assets/videos/electric_lunchbox.mp4": "526cd36987d0d6df76a1c10bff1048b5",
"assets/assets/videos/emesh.mp4": "15b24e0e370ecd6d6ae17e376bfb6df7",
"assets/assets/videos/facechange_cube.mp4": "9c4ff938de04b90e3215862fd72d399a",
"assets/assets/videos/face_brush.mp4": "80039169a3e08753a1787352f5111fd4",
"assets/assets/videos/face_foam.mp4": "6b7794d449b1b1d5f12f972240e710d5",
"assets/assets/videos/face_mask.mp4": "3a56fd428832fa2c5a5be76852ba5edc",
"assets/assets/videos/face_shield.mp4": "680d7755bcca40a7afc070d1d5958c12",
"assets/assets/videos/girl_toy.mp4": "c5562d25d474a8afbb0a4691684f251c",
"assets/assets/videos/pixy_cubes_block.mp4": "f6152dca42f11a1ee137d72292b023ad",
"assets/assets/videos/polo_belt.mp4": "d866cfe89fb0c5b5e946591b4b75ecaf",
"assets/assets/videos/pregnant_dress.mp4": "cdfb787102922c5902d263075ab4c853",
"assets/assets/videos/solid_geometry_puzzle.mp4": "8e4e4e5bdbefe955b989998a9f5b5293",
"assets/assets/videos/vege_container.mp4": "fcd3a1c74c222e0121af2b4769f4e545",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c9b953d3c0672332da3d98b610114a06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "133d592bda3354b5154d081ca5751823",
"/": "133d592bda3354b5154d081ca5751823",
"main.dart.js": "a5f79f4779974576802e2f74ca8504f8",
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
