angular.module('adventskalender', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.avatarUrl = 'https://dummyimage.com/122x122/d59c17/fff&text='+$routeParams.day+'.12';
  $scope.welcomeTitle = 'Herzlich Willkommen';
  $scope.welcomeText = 'Wir freuen uns Sie auf der';
}])

.config(function ($routeProvider) {
    $routeProvider.when('/:day', {
        controller: 'HomeCtrl',
        templateUrl: 'templates/day.html'
    })
});
