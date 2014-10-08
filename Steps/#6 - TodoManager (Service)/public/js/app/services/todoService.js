(function () {
    'use strict';

  var services =  angular.module('todo.services');

   services.factory('Todos', function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			}
		}
	});
})();