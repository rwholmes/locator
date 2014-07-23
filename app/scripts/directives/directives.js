angular.module('app.directives', [])

// Google Map Directive	
.directive('googleMap', function() {
	var link = function(scope, element, attrs) {
		var map, infoWindow;
		var markers = [];
		var browserSupportFlag =  new Boolean(); // tracks geolocation support

		// map configurations
		var mapOptions = {
			center: new google.maps.LatLng(37.775, -122.419), // default location
			zoom: 14
		};


		// initialize the map
		var initMap = function() {
			if (map === void 0) {
				// geolocation
				if (navigator.geolocation) {
					browserSupportFlag = true;
					navigator.geolocation.getCurrentPosition(function(position) {
						mapOptions.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						map = new google.maps.Map(element[0], mapOptions);
					}, function() {
						handleNoGeolocation(browserSupportFlag);
					});	
				} else {
					browserSupportFlag = false;
					handleNoGeolocation(browserSupportFlag);
				}
			}

			// handle browsers without geolocation or failed geolocation attempt
			var handleNoGeolocation = function(browserSupportFlag) {
				if (errorFlag == true) {
				  alert("Geolocation service failed.");
				} else {
				  alert("Your browser doesn't support geolocation. We've placed you in San Francisco.");
				}
				map = new google.maps.Map(element[0], mapOptions);
			};
		};    

		// place a marker in the map
		var setMarker = function(map, position, title, content) {
			var marker;
			var markerOptions = {
				position: position,
				map: map,
				title: title,
				icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
			};

			marker = new google.maps.Marker(markerOptions);
			markers.push(marker); // add marker to markers array

			google.maps.event.addListener(marker, 'click', function () {
				console.log('clicked marker, go to branch page');
				// close window if not undefined
				if (infoWindow !== void 0) {
					infoWindow.close();
				}
				// create new window
				var infoWindowOptions = {
					content: content
				};
				infoWindow = new google.maps.InfoWindow(infoWindowOptions);
				infoWindow.open(map, marker);
			});
		}

		scope.$watch(function() {
			// get the locations from scope
			return scope.chaseLocations;
		}, function() {
			// load and display the map
			initMap();
			// clear any markers
			for (var i=0; i < markers.length; i++) {
				markers[i].setMap(null);
			}
			markers = [];

			// place markers on map
			angular.forEach(scope.chaseLocations, function(val, key) {
				var location = new google.maps.LatLng(val.lat, val.lon);
				setMarker(map, location, val.title, val.content);
			});
		});
	};

	return {
		restrict: 'A',
		template: '<div id="gmaps"></div>',
		replace: true,
		link: link
	};
});