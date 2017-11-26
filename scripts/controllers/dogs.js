'use strict';

/**
 * @ngdoc function
 * @name tpangularApp.controller:DogCtrl
 * @description
 * # DogCtrl
 * Controller of the tpangularApp
 */
angular.module('tpangularApp')
  .controller('DogCtrl', ['$scope', 'dogSvc', function ($scope, dogSvc) {

    $scope.currentRace = "APPENZELLER";
    $scope.layout = 'grid';
    $scope.pics = [];

    dogSvc.fetchPopular(function (data) {
      $scope.pics = data.message;
      console.log($scope.pics);
    },$scope.currentRace);   


    $scope.switchToRace = function (race) {
      $scope.currentRace = race;
      $scope.pics=[];
      dogSvc.fetchPopular(function (data) {
        $scope.pics = data.message;
        console.log($scope.pics);
      },$scope.currentRace);  
    }

    $scope.switchToList = function () {
      $scope.layout = 'list';
    }

    $scope.switchToGrid = function () {
      $scope.layout = 'grid';
    }

  }]);
