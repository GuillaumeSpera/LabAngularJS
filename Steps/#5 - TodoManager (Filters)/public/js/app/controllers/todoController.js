(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('TodoController', function ($rootScope, $scope, $filter, todoPriority) {
        $scope.todoList = [];
        $scope.todoPriority = todoPriority;
        $scope.priorityFilter = {};
        $scope.sortOrder = 'id';
        $scope.getPriorityName = getPriorityName;

        getTodos();

        function getTodos() {
            for (var i = 1; i < 11; i++) {
                $scope.todoList.push({
                    id: i,
                    title: 'Todo ' + i,
                    priority: $scope.todoPriority.high
                });
            }

            var oldTodo = $filter('filter')($scope.todoList, function (item) {
                return item.id > 6;
            });
            console.log(JSON.stringify(oldTodo));
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