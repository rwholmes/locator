angular.module('app.directives', [])

// Google Map Directive	
.directive('googleMap', function() {
	var link = function(scope, element, attrs) {
		var map, infoWindow;
		var markers = [];

		// map configurations
		var mapOptions = {
			center: new google.maps.LatLng(50, 2),
			zoom: 4
		};

		// initialize the map
		var initMap = function() {
			if (map === void 0) {
				map = new google.maps.Map(element[0], mapOptions);
			}
		}    

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

		// load and display the map
		initMap();

		// place marekers on map
		setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
		setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
		setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
	};

	return {
		restrict: 'A',
		template: '<div id="gmaps"></div>',
		replace: true,
		link: link
	};
});