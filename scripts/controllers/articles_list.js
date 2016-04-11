portfolioApp.controller('ArticlesCtrl', function ($scope,ArticlesDataService) {

    $scope.wipArticles = ArticlesDataService.getWipArticles();
    $scope.$watch("wipArticles | filter: filterString", function(newVal) {
        $scope.filteredWipArticles = newVal;
    }, true);

    $scope.dadArticles = ArticlesDataService.getDadArticles();
    $scope.$watch("dadArticles | filter: filterString", function(newVal) {
        $scope.filteredDadArticles = newVal;
    }, true);

    $scope.inactiveArticles = ArticlesDataService.getInactiveArticles();
    $scope.$watch("inactiveArticles | filter: filterString", function(newVal) {
        $scope.filteredInactiveArticles = newVal;
    }, true);

});
