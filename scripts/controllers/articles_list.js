portfolioApp.controller('ArticlesCtrl', function ($scope,ArticlesDataService) {
    $scope.employeeProjects = ArticlesDataService.getEmployeeProjects();

    $scope.isLastItem = function (item) {
        let pos = $scope.employeeProjects.map(function(e) {return e.title;}).indexOf(item.title);
        return $scope.employeeProjects.length-1 == pos;
    }
});
