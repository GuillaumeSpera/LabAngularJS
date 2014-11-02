(function () {
    'use strict';

    var app = angular.module('todo.app', ['todo.controllers']);

    app.config(appConfig);
    app.run(appRun);

    function appConfig() {
        console.log('Configuring application...');
    };

    function appRun($rootScope) {
        console.log('Application started...');

        $rootScope.user = {
            LastName: 'Lab',
            FirstName: 'DCube'
        };
    };
})();