'use strict';

angular.module('atmBranchLocatorApp', [
    'ngRoute',
    'app.services.chase',
    'app.services.map',
    'app.map',
    'app.directives'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
