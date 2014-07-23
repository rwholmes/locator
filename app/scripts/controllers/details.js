angular.module('app.details', [
	'ngRoute'
])

.controller('DetailsCtrl', ['$scope', '$routeParams', 'LocalStorage', function($scope, $routeParams, LocalStorage) {
	var locationName = $routeParams.locationName;
	// Get individual location details from storage
	$scope.location = LocalStorage.getLocationDetails(locationName);
}]);