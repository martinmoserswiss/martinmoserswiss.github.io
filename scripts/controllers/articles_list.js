portfolioApp.controller('ArticlesCtrl', function ($scope,ArticlesDataService) {
    $scope.employeeProjects = ArticlesDataService.getEmployeeProjects();
    $scope.privateProjects = ArticlesDataService.getPrivateProjects();

    $scope.isLastItem = function (item) {
        let pos = $scope.employeeProjects.map(function(e) {return e.title;}).indexOf(item.title);
        console.log($scope.employeeProjects.length-1 == pos);
        return $scope.employeeProjects.length-1 == pos;
    }
});
