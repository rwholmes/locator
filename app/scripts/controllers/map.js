angular.module('app.map', [])

	.controller('MapCtrl', ['$scope', 'Chase', 'LocalStorage', function($scope, Chase, LocalStorage) {
		$scope.chaseLocations = [];
		
		navigator.geolocation.getCurrentPosition(function(position) {
			Chase.getLocations(position.coords.latitude, position.coords.longitude).then(function(data) {
				$scope.chaseLocations = data.data.locations;
				LocalStorage.saveLocations(data.data.locations);
			});
		}, function() {
			console.log('geolocation error');
		});

	}]);