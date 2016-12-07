angular.module('adventskalender', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

  var day = $routeParams.day;

  if (day == "0") {
    var dateObj = new Date();
    day = dateObj.getUTCDate() + "";
  }

  $scope.avatarUrl = 'https://dummyimage.com/122x122/d59c17/fff&text='+day+'.12';

  switch (day) {
    case "1":
        $scope.title = 'Skate or die!';
        $scope.text = 'Einmal mit dem Skateboard um das Haus.';
        $scope.imageUrl = 'skate.png'
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
        $scope.imageUrl = "schwimmfluegel.jpeg"
        $scope.link = ""
        break;
    case "4":
        $scope.title = 'Descansar (Ausruhen)';
        $scope.text = 'Lass es dir gut gehen und nimm ein warmes Bad';
        $scope.imageUrl = 'bad.png'
        $scope.link = ""
        break;
    case "5":
        $scope.title = 'Gute Laune!';
        $scope.text = 'Weil das Wochenende so toll war... Ein YB-Match mit mir ist offeriert!';
        $scope.imageUrl = "ybdich.png"
        $scope.link = ""
        break;
    case "6":
        $scope.title = 'Einfach so...';
        $scope.text = 'Danke das es dich so gibt wie du bist!';
        $scope.imageUrl = "wiedubist.png"
        $scope.link = ""
        break;
    case "7":
        $scope.title = 'Feritg luschtig!';
        $scope.text = 'Ich habe nie verstanden warum du so grusige und verhudelte Adiletten hast. Ich spendiere dir Neue!';
        $scope.imageUrl = "adiletten.png"
        $scope.link = ""
        break;
    case "8":
        $scope.title = 'Morro de São Paulo';
        $scope.text = 'Ich habe in diesem Moment berechtigterweise nein auf die Frage geantwortet und tue es auch jetzt. Gibt es ein schöneres Bild von dir als dieses hier? #schönheit #lässig #love #marsi-king-of-the-beauties';
        $scope.imageUrl = "salvador.png"
        $scope.link = ""
        break;
    case "9":
        $scope.title = 'Faus igs mau söt vergässä...';
        $scope.text = 'So würd ig mi i guet 40 Jahr o gseh! natürlich mit dir näbä dra...;)';
        $scope.imageUrl = "zmorge.png"
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
