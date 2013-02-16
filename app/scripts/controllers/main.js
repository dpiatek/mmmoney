/*jshint globalstrict: true*/
/*globals mmmoneyApp:true, $:true, console:true */
'use strict';

mmmoneyApp.controller('MainCtrl', function($scope, $filter, $http) {

  $http.get('dummy.json').success(function(data) {
    $scope.purchases = data;
  });

  var today = (function(){
    var now = new Date();
    return {
      'formated_date': now.getDay() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear(),
      'day': now.getDay(),
      'month': now.getMonth() + 1,
      'year': now.getFullYear()
    };
  }());

  $scope.purchaseDateDay = today.day;
  $scope.purchaseDateMonth = today.month;
  $scope.purchaseDateYear = today.year;


  $scope.addPurchase = function() {
    console.log(addPurchaseForm);
    $scope.purchases.push({
      name:  $scope.purchaseName,
      tags:  $scope.purchaseTags,
      price: $scope.purchasePrice,
      date:  {
        'day': $scope.purchaseDateDay,
        'month': $scope.purchaseDateMonth,
        'year': $scope.purchaseDateYear
      }

    });

    $scope.purchaseName = '';
    $scope.purchaseTags = '';
    $scope.purchasePrice = '';

    $('[name=purchaseName]').focus();
  };

  $scope.totalPurchases = function() {
    var total = 0;
    $scope.purchases.forEach(function(purchase){
      total += parseFloat(purchase.price, 10);
    });

    return total;
  };

});
