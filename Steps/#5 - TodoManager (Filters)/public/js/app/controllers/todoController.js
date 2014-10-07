(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('todoController', function ($rootScope, $scope) {
        $scope.todoList = [];

        for (var i = 1; i < 11; i++) {
            $scope.todoList.push({
                id: i,
                description: 'Todo ' + i
            });
        }
    });
})();