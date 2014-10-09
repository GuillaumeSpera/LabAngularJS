(function () {
    'use strict';

    var module = angular.module('todo.config');

    module
        .service('appLocation', appLocation)
        .provider('appLocation', appLocation);

    function appLocation() {
        var that = this,
            baseUrl = '';
        try {
            // Récupération de l'url de base de l'application
            if (document && document.head) {
                baseUrl = document.head.querySelector('base').getAttribute('href');
                if (baseUrl.indexOf('/', baseUrl.length - 1) != -1) {
                    baseUrl = baseUrl.substr(0, baseUrl.length - 1);
                }
            }
        }
        catch (ex) {
            console.log(ex);
        }

        // Méthode de résolution des chemins relatifs
        that.resolveUrl = function (url) {
            if (url.charAt(0) != '/') {
                return baseUrl + '/' + url;
            }
            else {
                return baseUrl + url;
            }
        };

        this.$get = function () {
            return that;
        };
    }

})();
