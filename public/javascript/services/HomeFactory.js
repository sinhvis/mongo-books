(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		

		o.createBook = function(book) {
			var q = $q.defer() ;
			$http.post('/api/books', book).success(function(res) {
				console.log(res);
				q.resolve();
			});
			return q.promise;
		}

		o.getBook = function(id) {
			var q = $q.defer() ;
			$http.get('/api/movies/' + id).success(function(res) {
				q.resolve(res) ;
			}) ;
			return q.promise ;
		} ;

		o.getBooks = function() {
			var q = $q.defer() ;
			$http.get('/api/books').success(function(res) {
				q.resolve(res) ;
			}) ;
			return q.promise ;
		} ;

		return o;
	}
})();