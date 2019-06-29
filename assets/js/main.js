$(document).ready(function () {
	var $replacingServiceWorker = false,
		$updatedServiceWorkerRegistration,
		$updateAppButton = $('#btn-reload-app'),
		$updateNotification = $('.js-update-notification'),
		$updateInterval;

	if ( 'serviceWorker' in navigator ) {
		$updateAppButton.click(function ($e) {
			$e.preventDefault();

			if ( $updatedServiceWorkerRegistration ) {
				$updatedServiceWorkerRegistration.postMessage({action: 'skipWaiting'});
			}
		});

		window.addEventListener('load', function () {
			navigator.serviceWorker.register('service_worker.js').then(function ($currentServiceWorkerRegistration) {
				clearInterval($updateInterval);
				$updateInterval = setInterval(function () {
					if ( navigator.onLine ) {
						$currentServiceWorkerRegistration.update();
					}
				}, 5 * 60 * 1000);

				// Service worker found during previous page loads is awaiting activation.
				if ( $currentServiceWorkerRegistration.waiting ) {
					$updatedServiceWorkerRegistration = $currentServiceWorkerRegistration.waiting;

					// If another service worker is installed currently, then show update notification.
					if ( navigator.serviceWorker.controller ) {
						$updateNotification.show();
					}
				}

				// New service worker was discovered during current page load.
				$currentServiceWorkerRegistration.addEventListener('updatefound', function () {
					$updatedServiceWorkerRegistration = $currentServiceWorkerRegistration.installing;

					$updatedServiceWorkerRegistration.addEventListener('statechange', function () {
						if ( $updatedServiceWorkerRegistration.state !== 'installed' ) {
							return;
						}

						// If another service worker is installed currently, then show update notification.
						if ( navigator.serviceWorker.controller ) {
							$updateNotification.show();
						}
					});
				});
			});

			navigator.serviceWorker.addEventListener('controllerchange', function () {
				if ( $replacingServiceWorker ) {
					return;
				}

				window.location.reload();
				$replacingServiceWorker = true;
			});
		});
	}

	new ReadingSelector();
});
