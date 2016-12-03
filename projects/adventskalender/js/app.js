
angular.module('adventskalender', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  var day = $routeParams.param1;
  console.log('day is: ' + day);
  $scope.welcomeTitle = 'Herzlich Willkommen';
  $scope.welcomeText = 'Wir freuen uns Sie auf der';
}])

.config(function ($routeProvider) {
    $routeProvider.when('/:param1', {
        controller: 'HomeCtrl'
    })
});
