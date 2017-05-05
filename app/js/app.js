'use strict;'

var todoApp = angular.module('todoApp', ['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/tasks', {
        templateUrl: 'templates/tasks.html',
        controller: 'todoController'
    });
    $routeProvider.when('/done', {
         templateUrl: 'templates/tasksdone.html',
         controller: 'todoDoneController'
    });
    $routeProvider.when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'aboutController'
    });
    $routeProvider.otherwise({redirectTo: '/tasks'});
    $locationProvider.html5Mode(true);
});
