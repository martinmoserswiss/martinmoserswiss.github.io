'use strict';

var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/articles_list.html',
        controller: 'ArticlesCtrl'
    });
});
