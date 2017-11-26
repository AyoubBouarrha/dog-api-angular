'use strict';

/**
 * @ngdoc overview
 * @name tpangularApp
 * @description
 * # tpangularApp
 *
 * Main module of the application.
 */
angular
  .module('tpangularApp', [
    'ngRoute',
  ])
  .factory('dogSvc',['$http', function($http ){
      return {
        fetchPopular: function(callback , race){
         var endPoint = "https://dog.ceo/api/breed/"+race+"/images"
          $http.get(endPoint).then(function(response){
            callback(response.data);
          });
        }
      }
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dogs.html',
        controller: 'DogCtrl',
        controllerAs: 'dogs'
      })
      .when('/dogs', {
        templateUrl: 'views/dogs.html',
        controller: 'DogCtrl',
        controllerAs: 'dogs'
      })
      .otherwise({
        redirectTo: '/'
      });
      
  });
