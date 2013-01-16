/*jshint globalstrict: true*/
/*globals mmmoneyApp:true, $:true */
'use strict';

mmmoneyApp.controller('MainCtrl', function($scope) {

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

  $scope.purchases = [
  {
    name: 'Nappies',
    tags: 'baby',
    price: 12.99,
    date:  {
        'day': $scope.purchaseDateDay,
        'month': $scope.purchaseDateMonth,
        'year': $scope.purchaseDateYear
      }
  },
  {
    name: 'Nappies',
    tags: 'baby',
    price: 22.99,
    date:  {
        'day': $scope.purchaseDateDay,
        'month': $scope.purchaseDateMonth,
        'year': $scope.purchaseDateYear
      }
  },
  {
    name: 'Nappies',
    tags: 'baby',
    price: 4.99,
    date:  {
        'day': $scope.purchaseDateDay,
        'month': $scope.purchaseDateMonth,
        'year': $scope.purchaseDateYear
      }
  }
  ];


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
