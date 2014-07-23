angular.module('app.map', [])

	.controller('MapCtrl', ['$scope', 'Chase', function($scope, Chase) {
		$scope.chaseLocations = [];
		
		navigator.geolocation.getCurrentPosition(function(position) {
			Chase.getLocations(position.coords.latitude, position.coords.longitude).then(function(data) {
				console.log('chase data: ', data.data.locations);
				$scope.chaseLocations = data.data.locations;
			});
		}, function() {
			console.log('geolocation error');
		});

	}]);