portfolioApp.controller('ArticlesCtrl', function ($scope,ArticlesDataService) {

    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }

    acc[0].click(); //open first panel

    $scope.wipArticles = ArticlesDataService.getWipArticles();
    $scope.dArticles = ArticlesDataService.getDArticles();
    $scope.inactiveArticles = ArticlesDataService.getInactiveArticles();

});
