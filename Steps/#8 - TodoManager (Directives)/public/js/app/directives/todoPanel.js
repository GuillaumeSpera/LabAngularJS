(function () {
    'use strict';

    angular.module('todo.directives')
        .directive('todopanel', todopanel)
        .directive('todoentry', todoentry);

    function todopanel(Todos) {
        return {
            restrict: 'E',
            scope: {
                filterProperty: '=',
                orderByProperty: '='
            },
            templateUrl: 'views/templates/todo_panel.html',
            controller: function ($scope) {
                getTodos();

                $scope.addTodo = addTodo;

                this.saveTodo = saveTodo;
                this.deleteTodo = deleteTodo;

                function getTodos() {
                    Todos.get().then(
                        function (data) {
                            if (data) {
                                $scope.todoList = data;
                            }
                        }
                    );
                }

                function addTodo(todo) {
                    Todos.add(todo);
                };

                function saveTodo(todo) {
                    Todos.update(todo);
                };

                function deleteTodo(todo) {
                    Todos.delete(todo);
                };
            }
        };
    };

    function todoentry() {
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            templateUrl: 'views/templates/todo_entry.html',
            replace: true,
            require: '^todopanel',
            link: function (scope, element, attrs, ctrl) {
                scope.saveTodo = function () {
                    ctrl.saveTodo(scope.model);
                };

                scope.deleteTodo = function () {
                    ctrl.deleteTodo(scope.model);
                };
            }
        };
    };
})();