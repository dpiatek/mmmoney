/*jshint globalstrict:true*/
/*global angular:true */
'use strict';

var mmmoneyApp = angular.module('mmmoneyApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
