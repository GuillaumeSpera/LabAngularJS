(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('todoController', function ($rootScope, $scope) {
        $scope.todoList = [];
        $scope.todoPriority = {
            low: 1,
            medium: 2,
            high: 3
        };
        $scope.priorityFilter = {};
        $scope.sortOrder = 'id';
        $scope.getPriorityName = getPriorityName;

        for (var i = 1; i < 11; i++) {
            $scope.todoList.push({
                id: i,
                description: 'Todo ' + i,
                priority: $scope.todoPriority.high
            });
        }

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