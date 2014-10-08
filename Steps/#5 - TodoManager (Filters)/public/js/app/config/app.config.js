(function () {
    'use strict';

    var module = angular.module('todo.config', []);

    module.constant('todoPriority', {
        low: 1,
        medium: 2,
        high: 3
    });

    module.constant('baseApiUrl', 'http://todolabs.azurewebsites.net');
})();