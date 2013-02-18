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

mmmoneyApp.directive('tagManager', function (){
  return {
    restrict: 'E',
    compile: function (element, attrs) {
      var htmlText =  '<h2>Tags:</h2>' +
                      '<input type="text" ng-model="search">' +
                      '<span class="label" ng-repeat="purchase in purchases">{{purchase.tags}}</span>' +
                      '<h2>Add new tag:</h2>';
      element.replaceWith(htmlText);
    }
  };
});

mmmoneyApp.service('getData', function($http){
  return $http.get('dummy.json');
});