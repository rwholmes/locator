angular.module('app.services.chase', [])

.service('Chase', ['$http', function($http) {
	this.chaseLocations = {};
	this.getLocations = function(currentLat, currentLon) {
		var lat = 'lat=' + currentLat;
		var lon = '&lng=' + currentLon;
		var url = 'https://m.chase.com/PSRWeb/location/list.action?' + lat + lon;

		return $http({
			url: url,
			method: 'GET'
		})
		.success(function(data) {
			console.log('Chase location query success');
		})
		.error(function(data) {
			console.log('Chase location query error');
		});
	};
}]);