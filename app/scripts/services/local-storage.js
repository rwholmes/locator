angular.module('app.services.localStorage', [])

.service('LocalStorage', [function() {
	// save locations to localStorage
	this.saveLocations = function(data) {
		// put locations into object for fast lookup
		var chaseLocations = {};
		for (var i=0; i<data.length; i++) {
			var location = data[i];
			chaseLocations[location.name] = location;
		}
		window.localStorage.chaseLocations = JSON.stringify(chaseLocations);
	};

	// retreive location details from localStorage
	this.getLocationDetails = function(locationName) {
		if (window.localStorage.chaseLocations) {
			var chaseLocations = JSON.parse(window.localStorage.chaseLocations);
			return chaseLocations[locationName];
		} else {
			return {};
		}
	};
}]);