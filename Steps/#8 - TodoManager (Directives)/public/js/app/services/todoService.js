(function () {
    'use strict';

    var services = angular.module('todo.services');

    services.factory('Todos', function ($http, baseApiUrl) {
        var apiUrl = baseApiUrl + '/todo';
        return {
            get: function () {
                return $http.get(apiUrl).then(
                    function (resp) {
                        return resp.data;
                    },
                    function (error) {
                    }
                );
            },
            add: function (todo) {
                return $http.post(apiUrl, todo).then(
                    function (resp) {
                        return resp.data;
                    },
                    function (error) {
                    }
                );
            },
            update: function (todo) {
                var url = apiUrl + '/' + todo.id;
                return $http.put(url, todo).then(
                    function (resp) {
                        return resp.data;
                    },
                    function (error) {
                    }
                );
            },
            delete: function (todo) {
                var url = apiUrl + '/' + todo.id;
                return $http.delete(url).then(
                    function (resp) {
                        return resp.data;
                    },
                    function (error) {
                    }
                );
            }
        }
    });
})();