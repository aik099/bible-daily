"use strict";

var CACHE_VERSION = 'v7';
var CACHE_NAME = 'bible_daily_cache';

var urlsToCache = [
	'assets/js/main.js?2019-06-29',
	'assets/js/reading_selector.js?2019-07-04',
	'assets/vendor/css/bootstrap.min.css',
	'assets/vendor/js/bootstrap.min.js',
	'assets/vendor/js/jquery-3.3.1.slim.min.js',
	'assets/vendor/js/moment.min.js',
	'assets/vendor/js/moment_locales/ru.js',
	'assets/vendor/js/popper.min.js',
	'favicon.ico',
	'index.html',
	''
];

self.addEventListener('message', function (event) {
	if ( event.data.action === 'skipWaiting' ) {
		self.skipWaiting();
	}
});

self.addEventListener('install', function (event) {
	var $requestsToCache = [];

	// Chrome has "credentials=include" by default, but not sure about other Web Browsers.
	urlsToCache.forEach(function($url) {
		$requestsToCache.push(new Request(
			$url,
			{credentials: 'same-origin'}
		));
	});

	event.waitUntil(caches.open(CACHE_VERSION + ':' + CACHE_NAME).then(function (cache) {
		return cache.addAll($requestsToCache);
	}));
});

self.addEventListener('fetch', function (event) {
	if ( event.request.method !== 'GET' ) {
		// console.log('skipping: ', event.request);
		return;
	}

	// console.log('fetching: ', event.request);
	event.respondWith(caches.open(CACHE_VERSION + ':' + CACHE_NAME).then(function (cache) {
		var fetchRequest;

		return cache.match(event.request).then(function (response) {

			if ( response ) {
				// console.log('[getting from cache] ', event.request.clone());

				// Populate, but don't use cache, while online.
				if ( navigator.onLine ) {
					fetchRequest = event.request.clone();

					return fetch(fetchRequest);
				}

				return response;
			}

			fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(function (response) {
				if ( !response || response.status !== 200 || response.type === 'error' ) {
					// console.log('[bad response] ', response);
					return response;
				}

				var responseToCache = response.clone();

				// console.log('[storing to cache] ', event.request.clone());
				cache.put(event.request, responseToCache);

				return response;
			}).catch(function(err) {
				return new Response(
					'You are currently offline and don\'t have the bible-daily downloaded.<br/><br/>Please go online and <a href="#" onclick="window.location.reload(); return false;">reload this page</a>.',
					{
						headers: {'Content-Type': 'text/html'}
					}
				);
			});

		});

	}));

});

self.addEventListener('activate', function (event) {
	event.waitUntil(caches.keys().then(function (keys) {
		return Promise.all(keys.filter(function (key) {
			return !key.startsWith(CACHE_VERSION);
		}).map(function (key) {
			return caches.delete(key);
		}));
	}));
});
