(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('DashboardController', function ($rootScope, $scope) {
        $scope.title = 'Dashboard';
        $scope.userName = $rootScope.user.FirstName + ' ' + $rootScope.user.LastName;
        $scope.scopeUserName = $scope.user.FirstName + ' ' + $scope.user.LastName;
    });
})();