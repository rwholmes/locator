'use strict';

angular.module('atmBranchLocatorApp', [
    'ngRoute',
    'app.services.chase',
    'app.services.localStorage',
    'app.map',
    'app.details',
    'app.directives'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html'
      })
      .when('/details/:locationName', {
        templateUrl: 'views/details.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
