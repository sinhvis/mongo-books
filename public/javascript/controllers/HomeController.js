(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory'];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to our App!';

		HomeFactory.getBooks().then(function(res) {
			vm.books = res ;
			console.log(res) ;
		}) ;
	}
})();