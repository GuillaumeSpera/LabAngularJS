(function () {
    'use strict';

    var app = angular.module('todo.app', ['todo.controllers', 'todo.services']);

    app.config(appConfig);
    app.run(appRun);

    function appConfig() {
        console.log('Configuring application...');
    };

    function appRun($log, $rootScope) {
        $log.log('Application started...');

        $rootScope.user = {
            LastName: 'Billon',
            FirstName: 'Felix',
            Surname: 'Flexi'
        };
    };
})();