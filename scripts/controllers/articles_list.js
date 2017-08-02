portfolioApp.controller('ArticlesCtrl', function ($scope,ArticlesDataService) {

    $scope.wipArticles = ArticlesDataService.getWipArticles();
    $scope.$watch("wipArticles | filter: filterString", function(newVal) {
        $scope.filteredWipArticles = newVal;
    }, true);

    $scope.dArticles = ArticlesDataService.getDArticles();
    $scope.$watch("dArticles | filter: filterString", function(newVal) {
        $scope.filteredDArticles = newVal;
    }, true);

    $scope.inactiveArticles = ArticlesDataService.getInactiveArticles();
    $scope.$watch("inactiveArticles | filter: filterString", function(newVal) {
        $scope.filteredInactiveArticles = newVal;
    }, true);

});
