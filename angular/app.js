'use strict';
var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'page-home.html',
    controller: 'HomeCtrl'
  });
  $routeProvider.when('/page-services', {
    templateUrl: 'page-services.html',
    controller: 'ServicesCtrl'
  });
  $routeProvider.when('/page-contact', {
    templateUrl: 'page-contact.html',
    controller: 'ClientsCtrl'
  });
    $routeProvider.when('/page-workerscomp', {
    templateUrl: 'page-workerscomp.html',
    controller: 'WorkersCtrl'
  });
    $routeProvider.when('/page-settings', {
    templateUrl: 'page-settings.html',
    controller: 'SettingsCtrl'
  });
  $routeProvider.otherwise({redirecTo: '/'});
}]);

app.controller('HomeCtrl', ['$scope', function($scope){
    $scope.message = 'JS';
    $scope.pageClass = 'page-home';
}]);

app.controller('ServicesCtrl', ['$scope', function($scope) {
    $scope.message = 'Location';
    $scope.pageClass = 'page-services';
}]);

app.controller('ClientsCtrl', ['$scope', function($scope) {
    $scope.message = 'No new messages from nurse at this time';
    $scope.pageClass = 'page-contact';
}]);

app.controller('WorkersCtrl', ['$scope', function($scope) {
    $scope.message = 'No Workers Comp Schedule at this time';
    $scope.pageClass = 'page-workerscomp';
}]);

app.controller('SettingsCtrl', ['$scope', function($scope) {
    $scope.message = 'Martin Sebastian, 813-454-2912, 37417 Laurel Hammock Dr, Zephyrhills Florida 33541';
    $scope.pageClass = 'page-settings';
}]);

