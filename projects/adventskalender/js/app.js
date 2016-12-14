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
        $scope.text = 'Ich habe in diesem Moment berechtigterweise nein auf die Frage geantwortet und tue es auch jetzt. Gibt es ein schöneres Bild von dir als dieses hier? #schönheit #lässig #love #marsi-queen-of-the-beauties';
        $scope.imageUrl = "salvador.png"
        $scope.link = ""
        break;
    case "9":
        $scope.title = 'Faus igs mau söt vergässä...';
        $scope.text = 'So würd ig mi i guet 40 Jahr o gseh! natürlich mit dir näbä dra...;)';
        $scope.imageUrl = "zmorge.png"
        $scope.link = ""
        break;
    case "10":
        $scope.title = 'Gute Laune Musik';
        $scope.text = 'Ein Lied dass mich daran erinnert wie einfach es gehen kann.';
        $scope.imageUrl = "milk.png"
        $scope.link = "https://www.youtube.com/watch?v=6vtKz6YwSD4"
        break;
    case "11":
        $scope.title = 'Schenken macht Freude...';
        $scope.text = 'Hat es in Berlin nicht etwas das ich gebrauchen könnte? ;-)';
        $scope.imageUrl = "hundeBlick.png"
        $scope.link = ""
        break;
    case "12":
        $scope.title = 'Heute schenke ich dir ein Fisch';
        $scope.text = 'Bitte gehe ins Migros/Coop und kaufe dir ein Forelle. Brutzle sie und geniesse dazu zwei, drei Kartoffeln mit Öl.';
        $scope.imageUrl = "forelle.png"
        $scope.link = ""
        break;
    case "13":
        $scope.title = 'Bienvenidos a Santa Teresa';
        $scope.text = 'Das Kunstwerk ist abholbereit. Klicke den Link unten um dort hin zu gelangen. Es ist reserviert für Marietta.';
        $scope.imageUrl = "santateresa.png"
        $scope.link = "http://www.pixelfarm.ch"
        break;
    case "14":
        $scope.title = 'Noch einmal schlafen';
        $scope.text = 'Und dann kommst du mich in den Weihnachtsferien besuchen :-) Ich freue mich sehr! #nervös #christmas #einmalSchlafen';
        $scope.imageUrl = "schlafen.png"
        $scope.link = ""
        break;
    case "15":
        $scope.title = 'Cool lebt es sich eifach besser';
        $scope.text = 'Du bisch eifach geng no so verdammt cool, dass igs mängisch gar nid cha gloubä ;-)';
        $scope.imageUrl = "cool.png"
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
