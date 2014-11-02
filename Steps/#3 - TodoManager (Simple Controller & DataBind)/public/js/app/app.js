(function () {
    'use strict';

    var app = angular.module('todo.app', ['todo.controllers']);

    app.config(appConfig);
    app.run(appRun);

    function appConfig() {
        console.log('Configuring application...');
    };

    function appRun() {
        console.log('Application started...');
    };
})();