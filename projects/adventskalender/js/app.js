angular.module('adventskalender', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.avatarUrl = 'https://dummyimage.com/122x122/d59c17/fff&text='+$routeParams.day+'.12';
  var day = $routeParams.day;
  switch (day) {
    case "1":
        $scope.title = 'Skate or die!';
        $scope.text = 'Einmal mit dem Skateboard um das Haus.';
        $scope.imageUrl = 'images/skate.png'
        $scope.link = ""
        break;
    case "2":
        console.log("2");
        $scope.title = 'The Eternal Beauty Of Snowboarding';
        $scope.text = 'Ein geiler Snowboardfilm der du dir umbedingt reinziehen musst. Ich sage nur "What the fuck are we doing here?"';
        $scope.imageUrl = ''
        $scope.link = "https://www.youtube.com/watch?v=FKeUVMMl0fc"
        break;
    case "3":
        $scope.title = 'Etwas gewagtes';
        $scope.text = 'Frag öper uf dr Strass wo du chasch Schwümmflügeli choufe.';
        $scope.imageUrl = "images/schwimmfluegel.jpeg"
        $scope.link = ""
        break;
    case "4":
        $scope.title = 'Descansar (Ausruhen)';
        $scope.text = 'Lass es dir gut gehen und nimm ein warmes Bad';
        $scope.imageUrl = 'images/bad.png'
        $scope.link = ""
        break;
    case "5":
        $scope.title = '';
        $scope.text = '';
        $scope.imageUrl = ""
        $scope.link = ""
        break;
    case "6":
        $scope.title = '';
        $scope.text = '';
        $scope.imageUrl = ""
        $scope.link = ""
        break;
    default: console.log('Not applicable...');
  }
}])

.config(function ($routeProvider) {
    $routeProvider.when('/:day', {
        controller: 'HomeCtrl',
        templateUrl: 'templates/day.html'
    })
});