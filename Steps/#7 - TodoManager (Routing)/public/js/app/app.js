(function () {
    'use strict';

    var app = angular.module('todo.app', ['ui.router', 'todo.controllers']);

    app.config(appConfig);
    app.run(appRun);

    function appConfig($locationProvider, $stateProvider, $urlRouterProvider) {
        console.log('Configuring application...');

        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state({
                name: 'dashboard',
                url: '/',
                templateUrl: '/views/dashboard.html',
                controller: 'DashboardController'
            })
            .state({
                name: 'todo',
                url: '/todo',
                templateUrl: '/views/todo.html',
                controller: 'TodoController'
            })
            .state({
                name: '404',
                url: '/404',
                templateUrl: '/views/404.html'
            });

        $locationProvider.html5Mode(true);
    };

    function appRun($rootScope) {
        console.log('Application started...');

        $rootScope.user = {
            LastName: 'Lab',
            FirstName: 'DCube'
        };
    };
})();