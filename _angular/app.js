'use strict';
var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  });
  $routeProvider.when('/services', {
    templateUrl: 'services.html',
    controller: 'ServicesCtrl'
  });
  $routeProvider.when('/clients', {
    templateUrl: 'clients.html',
    controller: 'ClientsCtrl'
  });
  $routeProvider.otherwise({redirecTo: '/'});
}]);

app.controller('HomeCtrl', ['$scope', function($scope){
    $scope.message = 'Welcome to Inspire';
}]);

app.controller('ServicesCtrl', ['$scope', function($scope) {
    $scope.message = 'Please Hit "Allow" to set your Location...';
}]);

app.controller('ClientsCtrl', ['$scope', function($scope) {
    $scope.message = 'These are clients';
}]);