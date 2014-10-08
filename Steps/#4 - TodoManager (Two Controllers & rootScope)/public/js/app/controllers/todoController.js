(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('TodoController', function ($rootScope, $scope) {
        $scope.todoList = [];

        getTodos();

        function getTodos() {
            for (var i = 1; i < 11; i++) {
                $scope.todoList.push({
                    id: i,
                    title: 'Todo ' + i
                });
            }
        };
    });
})();