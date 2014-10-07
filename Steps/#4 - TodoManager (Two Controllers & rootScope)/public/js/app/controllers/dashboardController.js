(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('dashboardController', function ($rootScope) {
        this.title = 'Dashboard';
        this.userName = $rootScope.user.FirstName + ' ' + $rootScope.user.LastName;
    });
})();