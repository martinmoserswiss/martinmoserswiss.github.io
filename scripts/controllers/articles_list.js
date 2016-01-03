portfolioApp.controller('ArticlesCtrl', function ($scope,ArticlesDataService) {

    $scope.wipArticles = ArticlesDataService.getWipArticles();

    $scope.$watch("wipArticles | filter: filterString", function(newVal) {
        $scope.filteredwipArticles = newVal;
    }, true);

    /*
    $scope.dadArticles = ArticlesDataService.getDadArticles();
    $scope.inactiveArticles = ArticlesDataService.getInactiveArticles();
    */
});