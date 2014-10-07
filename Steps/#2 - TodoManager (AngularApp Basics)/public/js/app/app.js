(function () {
    'use strict';

    var app = angular.module('todo.app', []);

    app.config(appConfig);
    app.run(appRun);

    function appConfig() {
        console.log('Configuring application...');
    };

    function appRun($log) {
        $log.log('Application started...');
    };
})();