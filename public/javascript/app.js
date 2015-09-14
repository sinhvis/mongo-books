(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('CreateBook', {
			url: '/Create',
			templateUrl: 'views/create_book.html',
			controller: 'CreateBookController',
			controllerAs: 'vm'
		}).state('BookInfo', {
			url: '/Book/:id',
			templateUrl: 'views/book_info.html',
			controller: 'BookDetailsController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
