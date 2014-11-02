(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('TodoController', function ($rootScope, $scope, todoPriority, Todos) {
        $scope.todoList = [];
        $scope.todoPriority = todoPriority;
        $scope.priorityFilter = {};
        $scope.sortOrder = 'id';
        $scope.getPriorityName = getPriorityName;

        getTodos();

        function getTodos() {
            Todos.get().then(
                function (data) {
                    if (data) {
                        $scope.todoList = data;
                    }
                }
            );
        };

        function getPriorityName() {
            switch ($scope.priorityFilter.priority) {
                case $scope.todoPriority.low:
                    return 'Low';
                    break;
                case $scope.todoPriority.medium:
                    return 'Medium';
                    break;
                case $scope.todoPriority.high:
                    return 'High';
                    break;
                default:
                    return 'None';
                    break;
            }
        };
    });
})();