(function () {
    'use strict';

    var controllers = angular.module('todo.controllers', []);

    controllers.controller('dashboardController', function ($rootScope, $scope) {
        $scope.title = 'Dashboard';
    });
})();