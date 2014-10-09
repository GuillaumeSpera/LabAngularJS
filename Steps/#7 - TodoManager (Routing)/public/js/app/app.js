(function () {
    'use strict';

    var app = angular.module('todo.app', ['ui.router', 'todo.config', 'todo.controllers', 'todo.services']);

    app.config(appConfig);
    app.run(appRun);

    function appConfig($locationProvider, $stateProvider, $urlRouterProvider, appLocationProvider) {
        console.log('Configuring application...');

        $urlRouterProvider.otherwise(appLocationProvider.resolveUrl('/404'));

        $stateProvider
            .state({
                name: 'dashboard',
                url: appLocationProvider.resolveUrl('/'),
                templateUrl: appLocationProvider.resolveUrl('/views/dashboard.html'),
                controller: 'DashboardController'
            })
            .state({
                name: 'todo',
                url: appLocationProvider.resolveUrl('/todo'),
                templateUrl: appLocationProvider.resolveUrl('/views/todo.html'),
                controller: 'TodoController'
            })
            .state({
                name: '404',
                url: appLocationProvider.resolveUrl('/404'),
                templateUrl: appLocationProvider.resolveUrl('/views/404.html')
            });

        $locationProvider.html5Mode(true);
    };

    function appRun($log, $rootScope) {
        $log.log('Application started...');

        $rootScope.user = {
            LastName: 'Lab',
            FirstName: 'DCube'
        };
    };
})();