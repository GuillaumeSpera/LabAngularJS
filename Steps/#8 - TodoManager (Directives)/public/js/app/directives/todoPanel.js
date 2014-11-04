(function () {
    'use strict';

    angular.module('todo.directives')
        .directive('todopanel', todopanel)
        .directive('todoentry', todoentry);

    function todopanel(Todos, todoPriority) {
        return {
            restrict: 'E',
            scope: {
                filterProperty: '=',
                orderByProperty: '='
            },
            templateUrl: 'views/templates/todo_panel.html',
            controller: function ($scope) {
                getTodos();

                $scope.todoList = [];
                $scope.priorityList = [
                    {id: todoPriority.low, name: 'Low'},
                    {id: todoPriority.medium, name: 'Medium'},
                    {id: todoPriority.high, name: 'High'}
                ];
                $scope.addTodo = addTodo;
                $scope.addTodoConfirm = addTodoConfirm;
                $scope.addTodoCancel = addTodoCancel;
                $scope.adding = false;
                $scope.newTodo = null;

                this.saveTodo = saveTodo;
                this.deleteTodo = deleteTodo;
                this.todoPriority = todoPriority;

                function getTodos() {
                    Todos.get().then(
                        function (data) {
                            if (data) {
                                data.forEach(function (item) {
                                    $scope.todoList.push(item);
                                });
                            }
                        }
                    );
                }

                function addTodo() {
                    $scope.adding = true;
                    $scope.newTodo = {
                        title: '',
                        priority: 1,
                        done: false
                    };
                };

                function addTodoConfirm() {
                    if ($scope.newTodo.title === '')
                        return;
                    Todos.add($scope.newTodo).then(
                        function (todo) {
                            if (todo) {
                                $scope.todoList.push(todo);
                            }
                            $scope.newTodo = null;
                            $scope.adding = false;
                        }
                    );
                };

                function addTodoCancel() {
                    $scope.adding = false;
                    $scope.newTodo = null;
                };

                function saveTodo(todo) {
                    Todos.update(todo);
                };

                function deleteTodo(todo) {
                    Todos.delete(todo).then(
                        function (data) {
                            if (data) {
                                var idx = $scope.todoList.indexOf(todo);
                                if (idx !== -1)
                                    $scope.todoList.splice(idx, 1);
                            }
                        }
                    );
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
                scope.todoPriority = ctrl.todoPriority;
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
