(function() {
	"use strict" ;
	angular.module('app').controller('CreateBookController', CreateBookController) ;
	CreateBookController.$inject = ['HomeFactory', '$state'] ;

	function CreateBookController(HomeFactory, $state) {
		var vm = this ;
		vm.book = {};

		
		
		

		vm.createBook = function(book) {
			console.log('create button clicked');
			vm.book.postedDate = new Date();
			HomeFactory.createBook(book).then(function(res){
				$state.go('Home');
			});
		}
	}
})() ;