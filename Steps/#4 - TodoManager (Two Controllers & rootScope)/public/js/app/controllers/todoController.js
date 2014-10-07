(function () {
    'use strict';

    var controllers = angular.module('todo.controllers');

    controllers.controller('todoController', function () {
        this.todoList = [];

        for (var i = 1; i < 11; i++) {
            this.todoList.push({
                id: i,
                description: 'Todo ' + i
            });
        }
    });
})();