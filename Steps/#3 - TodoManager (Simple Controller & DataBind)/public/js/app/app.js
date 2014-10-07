(function () {
    'use strict';

    var app = angular.module('todo.app', ['todo.controllers']);

    app.config(appConfig);
    app.run(appRun);

    function appConfig() {
        console.log('Configuring application...');
    };

    function appRun($log) {
        $log.log('Application started...');
    };
})();