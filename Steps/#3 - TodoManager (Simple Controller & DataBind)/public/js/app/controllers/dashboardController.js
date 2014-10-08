(function () {
    'use strict';

    var controllers = angular.module('todo.controllers', []);

    controllers.controller('DashboardController', function ($rootScope, $scope) {
        $scope.title = 'Dashboard';
    });
})();