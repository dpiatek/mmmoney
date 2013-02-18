/*jshint globalstrict: true*/
/*globals mmmoneyApp:true, $:true, console:true */
'use strict';

mmmoneyApp.controller('MainCtrl', function($scope, $filter, $http, getData) {

  $scope.purchases = {};

  getData.success(function(data) {
    $scope.purchases = data;
  });


  // Get today's date
  $scope.today = (function(){
    var now = new Date(),
        day = now.getDate(),
        month = now.getMonth() + 1,
        year = now.getFullYear();

    return {
      'day': day,
      'month': month,
      'year': year,
      'formated_date' : day + '/' + month + '/' + year
    };
  }());

  // Defaults
  $scope.purchaseDay = $scope.today.day;
  $scope.purchaseMonth = $scope.today.month;
  $scope.purchaseYear = $scope.today.year;

  $scope.formInvalid = function() {
    console.log($scope.addPurchaseForm.$pristine);
    if ($scope.addPurchaseForm.$pristine) return false;
    return $scope.addPurchaseForm.$invalid;
  };

  $scope.addPurchase = function() {

    console.log($scope.addPurchaseForm);

    if ($scope.formInvalid()) return;

    $scope.purchases.push({
      name:  $scope.purchaseName,
      tags:  $scope.purchaseTags,
      price: $scope.purchasePrice,
      date:  {
        'day': $scope.purchaseDay,
        'month': $scope.purchaseMonth,
        'year': $scope.purchaseYear
      }

    });

    $scope.purchaseName = '';
    $scope.purchaseTags = '';
    $scope.purchasePrice = '';

    $('[name=purchaseName]').focus();
  };

  $scope.totalPurchases = function() {

    if (!$scope.purchases) return;

    var total = 0,
        purchases = $filter('filter')($scope.purchases, $scope.search);

    purchases.forEach(function(purchase){
      total += parseFloat(purchase.price, 10);
    });

    return total;
  };


  $scope.tags = function() {
    var tags = [];
    $scope.purchases.forEach(function(el){
      tags.push(el.tags);
    });

    return tags;
  };

});
